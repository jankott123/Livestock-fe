/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import Staj from "./Staj";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import StajPridatZvire from "./StajPridatZvire";
import SeznamZvirat from "./SeznamZvirat";
import { useRef } from "react";
import SmazatZvire from "./SmazatZvire";
import { Divider } from "@mui/material";

function StajDetail(props) {
  const [zvirata, setZvirata] = useState(null);
  const [showPage, setshowPage] = useState(null);
  const [pokus, setPokus] = useState(null);
  const location = useLocation();
  const [zvireId, setzvireId] = useState(null);

  const aktualni_staj = (props) => {
    const staje = location.state.info;

    for (let i = 0; i < staje.length; i++) {
      if (staje[i].id === location.state.id) {
        return i;
      }
    }
  };

  async function pridatZvire(event) {
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

    fetch(process.env.REACT_APP_APISERVER + "zvire/" + location.state.id, {
      method: "POST",
      credentials: "include",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        setZvirata(result);
      });
  }

  function oznaceniZvire(zvire_id) {
    setzvireId(zvire_id);
  }

  async function smazatZvire(event) {
    await hasAccess();
    fetch(process.env.REACT_APP_APISERVER + "zvire/" + zvireId, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        setZvirata(result);
      });
  }

  useEffect(async () => {
    await hasAccess();

    fetch(process.env.REACT_APP_APISERVER + "staj/" + location.state.id, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setZvirata(data);
        setshowPage(true);
      });
  }, []);

  return (
    <div>
      <Grid item sx={{ mt: 8, ml: 0 }} xs={12}>
        <Typography
          sx={{ fontSize: 24, fontFamily: "Helvetica", textAlign: "left" }}
        >
          {" "}
          {location.state.info[aktualni_staj()].nazev}
        </Typography>
        <Divider></Divider>
      </Grid>
      <Grid
        item
        sx={{ ml: 0, display: "flex", justifyContent: "flex-start" }}
        xs={12}
      >
        <Box sx={{ mr: 4, mt: 2, display: "flex" }}>
          {" "}
          <StajPridatZvire
            pridatZvire={pridatZvire}
            staj_cislo={location.state.id}
            nazev_staje={location.state.info[aktualni_staj()].nazev}
            chovany_druh={location.state.info[aktualni_staj()].druh}
            sx={{ p: 0 }}
          >
            {" "}
          </StajPridatZvire>
          <SmazatZvire smazatZvire={smazatZvire}> </SmazatZvire>
        </Box>
      </Grid>
      <Grid item sx={{ ml: 0, mt: 0 }} xs={12}>
        {showPage ? (
          <SeznamZvirat oznaceniZvire={oznaceniZvire} zvirata={zvirata}>
            {" "}
          </SeznamZvirat>
        ) : null}
      </Grid>
    </div>
  );
}
export default StajDetail;
