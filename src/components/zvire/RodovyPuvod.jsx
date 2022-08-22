import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import Graf from "./Graf";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

export default function RodovyPuvod(props) {
  return (
    <div>
      <Grid sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
        <Typography
          sx={{
            textAlign: "left",
            color: "black",
            textDecoration: "bold",
            fontSize: 18,
          }}
        >
          <b> Rodový původ: </b>
          <hr />
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Typography sx={{ textAlign: "left", flexGrow: 1, mb: 3 }}>
            <b> Datum narození: </b> {props.zvire.datum_narozeni}
          </Typography>

          <Typography sx={{ textAlign: "left", flexGrow: 1, mb: 3 }}>
            <b> Matka: </b> {props.zvire.matka}
          </Typography>

          <Typography sx={{ textAlign: "left", flexGrow: 1, mb: 3 }}>
            <b> Otec: </b> {props.zvire.otec}
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}
