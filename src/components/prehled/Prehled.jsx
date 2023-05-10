import * as React from "react";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import GrafZastoupeni from "../zvirata/GrafZastoupeni";
import GrafDojene from "../zvirata/GrafDojene";
import GrafStaje from "../zvirata/GrafStaje";
import Informace from "./Informace";
import Majitel from "./Majitel";
import PridatMajitele from "./PridatMajitele";
import { withStyles } from "@mui/styles";

function Prehled(props) {
  const { classes } = props;
  const [majitel, setMajitel] = useState(null);
  const [majitel2, setMajitel2] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function acces() {
      await hasAccess();
      fetch(process.env.REACT_APP_APISERVER + "uzivatel", {
        method: "GET",
        credentials: "include",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setMajitel(data[0]);
          var array = Object.keys(data[0]).map(function (key) {
            return data[0][key];
          });

          setMajitel2(array);
        });
    }
    acces();
    return;
  }, []);

  async function editovatMajitele(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    await hasAccess();
    fetch(process.env.REACT_APP_APISERVER + "editMajitel", {
      method: "POST",
      credentials: "include",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        setMajitel(result[0]);

        var array = Object.keys(result[0]).map(function (key) {
          return result[0][key];
        });

        setMajitel2(array);
      });
  }

  return (
    <div>
      <Grid sx={{ mt: 8, ml: 0, mb: 2 }} lg={12}>
        <Typography
          sx={{ fontSize: 22, fontFamily: "Helvetica", textAlign: "left" }}
        >
          {" "}
          PŘEHLED{" "}
        </Typography>
        <Divider></Divider>
      </Grid>

      <Grid lg={10} sx={{ mb: 2, display: "flex", flexDirection: "row" }}>
        <Box sx={{ mt: 3, ml: 4, mr: 7, width: 500 }}>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Helvetica",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            {" "}
            Hospodářství:{" "}
          </Typography>

          <Divider></Divider>
          <Box
            sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}
          >
            <Informace> </Informace>
          </Box>
        </Box>

        <Box sx={{ mt: 3, ml: 4, mr: 7, width: 500 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: "Helvetica",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              {" "}
              Hospodář:{" "}
            </Typography>
            <PridatMajitele majitel={majitel2} editovat={editovatMajitele}>
              {" "}
            </PridatMajitele>
          </Box>

          <Divider></Divider>

          <Box
            sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}
          >
            {majitel !== null ? <Majitel majitel={majitel}> </Majitel> : null}
          </Box>
        </Box>

        <Box sx={{ mt: 3, ml: 10 }}>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Helvetica",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            {" "}
            Obsazenost stají:{" "}
          </Typography>

          <Divider></Divider>
          <Box sx={{ width: 420, ml: 0 }}>
            <GrafStaje> </GrafStaje>
          </Box>
        </Box>
      </Grid>

      <Grid lg={12} sx={{ display: "flex", flexDirection: "row", mb: 5 }}>
        <Box sx={{ ml: 4 }}>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Helvetica",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            {" "}
            Přehled zastoupení jednotlivých druhů:{" "}
          </Typography>
          <Divider></Divider>
          <Box sx={{ width: 350, ml: 5 }}>
            <GrafZastoupeni> </GrafZastoupeni>{" "}
          </Box>
        </Box>
        <Box sx={{ ml: 18 }}>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Helvetica",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            {" "}
            Dojená zvířata:{" "}
          </Typography>
          <Divider></Divider>
          <Box sx={{ width: 370, ml: 0 }}>
            <GrafDojene> </GrafDojene>
          </Box>
        </Box>
      </Grid>
    </div>
  );
}

export default Prehled;
