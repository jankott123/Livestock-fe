import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import Graf from "./Graf";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

export default function InfoZvire(props) {
  return (
    <div>
      <Grid sx={{ display: "flex", flexDirection: "column", mb: 5 }}>
        <Typography
          sx={{
            textAlign: "left",
            color: "black",
            textDecoration: "bold",
            fontSize: 18,
          }}
        >
          <b> Základní informace o zvířeti: </b>
          <hr />
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Typography sx={{ textAlign: "left", flexGrow: 1, mb: 3 }}>
            <b> Druh: </b> {props.zvire.nazev_druhu}
          </Typography>

          <Typography sx={{ textAlign: "left", flexGrow: 1 }}>
            <b> Identifikační číslo: </b>
            {props.zvire.identifikacni_cislo}
          </Typography>

          <Typography sx={{ textAlign: "left", flexGrow: 1 }}>
            <b> Dojené: </b>
            {props.zvire.dojene}
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}
