/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import Graf from "./Graf";
import InfoZvire from "./InfoZvire";
import FyzickeInfo from "./FyzickeInfo";
import RodovyPuvod from "./RodovyPuvod";
import PridatHmotnost from "./PridatHmotnost";
import Editace from "./Editace";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { Divider } from "@material-ui/core";
import SmazatHmotnost from "./SmazatHmotnost";

export default function Zvire(props) {
  const location = useLocation();
  const [zvire, setZvire] = useState(null);
  const [vek, setVek] = useState(null);
  const [hmotnost2, setHmotnost2] = useState([]);
  const [jeVaha, setjeVaha] = useState(false);

  async function editovatZvire(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    let current_datetime = new Date(data.get("datum"));
    let formatted_date =
      current_datetime.getDate() +
      "." +
      (current_datetime.getMonth() + 1) +
      "." +
      current_datetime.getFullYear();

    data.set("datum", formatted_date);

    let zvire = {
      identifikacni_cislo: data.get("identif_cislo"),
      pohlavi: data.get("pohlavi"),
      plemeno: data.get("plemeno"),
      dojene: data.get("dojene"),
      datum: data.get("datum"),
      matka: data.get("matka"),
      otec: data.get("otec"),
      id_staje: data.get("id_staje"),
    };

    const data2 = JSON.stringify(zvire);
    await hasAccess();

    fetch(process.env.REACT_APP_APISERVER + "zvire/" + location.state.id, {
      method: "PUT",
      credentials: "include",
      body: data2,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setZvire(data);
      });
  }

  async function smazatHmotnost(event, id) {
    event.preventDefault();
    await hasAccess();
    const data = new FormData(event.target);
    id = data.get("hmotnost");

    fetch(
      process.env.REACT_APP_APISERVER +
        "hmotnost/" +
        location.state.id +
        "/" +
        id,
      {
        method: "DELETE",
        credentials: "include",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        var arr = [];
        for (var i = 0; i < result.length; i++) {
          var date = new Date(result[i].datum.date);
          let formatted_date =
            date.getDate() +
            "." +
            (date.getMonth() + 1) +
            "." +
            date.getFullYear();

          const graf_hodnoty = {
            datum: formatted_date,
            hmotnost: result[i].hmotnost,
          };
          arr[i] = graf_hodnoty;
        }

        setHmotnost2(arr);
      });
  }

  async function pridatHmotnost(event, id) {
    event.preventDefault();
    const data = new FormData(event.target);
    await hasAccess();

    let current_datetime = new Date(data.get("datum"));
    let formatted_date =
      current_datetime.getDate() +
      "." +
      (current_datetime.getMonth() + 1) +
      "." +
      current_datetime.getFullYear();

    data.set("datum", formatted_date);

    fetch(process.env.REACT_APP_APISERVER + "hmotnost/" + id, {
      method: "POST",
      credentials: "include",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        var arr = [];
        for (var i = 0; i < result.length; i++) {
          var date = new Date(result[i].datum.date);
          let formatted_date =
            date.getDate() +
            "." +
            (date.getMonth() + 1) +
            "." +
            date.getFullYear();

          const graf_hodnoty = {
            datum: formatted_date,
            hmotnost: result[i].hmotnost,
          };
          arr[i] = graf_hodnoty;
        }

        setHmotnost2(arr);
      });
  }

  useEffect(async () => {
    await hasAccess();

    const Mypromise = new Promise((resolve, reject) =>
      fetch(process.env.REACT_APP_APISERVER + "hmotnost/" + location.state.id, {
        method: "GET",
        credentials: "include",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
    );

    Mypromise.then(function (result) {
      var arr = [];
      for (var i = 0; i < result.length; i++) {
        var date = new Date(result[i].datum.date);
        let formatted_date =
          date.getDate() +
          "." +
          (date.getMonth() + 1) +
          "." +
          date.getFullYear();

        const graf_hodnoty = {
          id: result[i].id,
          datum: formatted_date,
          hmotnost: result[i].hmotnost,
        };
        arr[i] = graf_hodnoty;
      }

      setHmotnost2(arr);
    }).then(function (result) {
      fetch(process.env.REACT_APP_APISERVER + "zvire/" + location.state.id, {
        method: "GET",
        credentials: "include",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setZvire(data);
        });
    });
  }, []);

  return (
    <div>
      {zvire ? (
        <div>
          <Grid item sx={{ mt: 8, ml: 4, mb: 4 }} xs={5}>
            <Typography sx={{ textAlign: "left" }}>
              <h1>
                {" "}
                {zvire[0].nazev_druhu +
                  " - " +
                  zvire[0].identifikacni_cislo}{" "}
              </h1>

              <Editace editovatZvire={editovatZvire} zvire={zvire[0]}>
                {" "}
              </Editace>
            </Typography>
          </Grid>

          <Grid sx={{ display: "flex", flexDirection: "row", ml: 4 }} xs={12}>
            <Grid
              sx={{ display: "flex", flexDirection: "column", mr: 10 }}
              xs={4}
            >
              <InfoZvire zvire={zvire[0]}> </InfoZvire>

              <FyzickeInfo hmotnost={hmotnost2} zvire={zvire[0]}>
                {" "}
              </FyzickeInfo>

              <RodovyPuvod hmotnost={hmotnost2} zvire={zvire[0]}>
                {" "}
              </RodovyPuvod>
            </Grid>

            <Grid
              sx={{ ml: 14, mt: 1, display: "flex", flexDirection: "column" }}
              xs={6}
            >
              <Typography sx={{ textAlign: "left", fontSize: 18 }}>
                <b> Hmotnostní přírůstky v kg: </b>
                <Divider></Divider>
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Graf hmotnost={hmotnost2}> </Graf>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "right",
                  mr: 0,
                  mt: 2,
                }}
              >
                <SmazatHmotnost
                  sx={{}}
                  id={zvire[0].id}
                  smazat={smazatHmotnost}
                  hmotnost={hmotnost2}
                >
                  {" "}
                </SmazatHmotnost>
                <PridatHmotnost
                  sx={{ ml: 50 }}
                  id={zvire[0].id}
                  pridatHmotnost={pridatHmotnost}
                >
                  {" "}
                </PridatHmotnost>
              </Box>
            </Grid>
          </Grid>
        </div>
      ) : null}
    </div>
  );
}
