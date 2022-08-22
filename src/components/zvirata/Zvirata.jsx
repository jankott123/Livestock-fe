import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { fontSize } from "@mui/system";
import GrafZastoupeni from "./GrafZastoupeni";
import GrafDojene from "./GrafDojene";
import SeznamZvirat from "./SeznamZvirat";
import GrafStaje from "./GrafStaje";
import { Divider } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  fabStyle: {
    height: "5",
    width: "10",
  },
};

function Zvirata (props) {

  return (
    <div>
      <Grid sx={{ mt: 8, ml: 0, mb: 4 }} lg={12}>
        <Typography
          sx={{ fontSize: 22, fontFamily: "Helvetica", textAlign: "left" }}
        >
          {" "}
          PŘEHLED O VŠECH ZVÍŘATECH{" "}
        </Typography>
        <Divider></Divider>
      </Grid>

      <Grid sx={{ mt: 2, ml: 0, mb: 4 }} lg={12}>
        <Box sx={{ mt: 4 }}>
          <Typography
            sx={{ fontSize: 20, fontFamily: "Helvetica", textAlign: "left" }}
          >
            {" "}
            Seznam všech chovaných zvířat:{" "}
          </Typography>
          <Divider></Divider>
        <Box sx={{mt:3}}>  
          <SeznamZvirat> </SeznamZvirat>{" "}

        </Box> 
        </Box>
      </Grid>


      <Grid sx={{ display: "flex", flexDirection: "row",  mb: 5 }}>
        <Box sx={{ ml: 3, width: 600 }}>
          <Typography
            sx={{ fontSize: 20, fontFamily: "Helvetica", textAlign: "left" }}
          >
            {" "}
            Přehled zastoupení jednotlivých druhů:{" "}
          </Typography>
          <Divider></Divider>
          <GrafZastoupeni> </GrafZastoupeni>{" "}
        </Box>
        <Box sx={{ ml: 15, width: 600 }}>
          <Typography
            sx={{ fontSize: 20, fontFamily: "Helvetica", textAlign: "left" }}
          >
            {" "}
            Dojená zvířata:{" "}
          </Typography>
          <Divider></Divider>
          <GrafDojene> </GrafDojene>
        </Box>
      </Grid>




   

      <Grid sx={{ mt: 8, ml: 8, mb: 4 }} lg={12}></Grid>
    </div>
  );
}
export default withStyles(styles)(Zvirata);