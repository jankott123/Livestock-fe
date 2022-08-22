import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import Graf from "./Graf";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { propsToClassKey } from "@mui/styles";


export default function FyzickeInfo(props){

    function getVek(date) {
        var dateString = date;
        var dateParts = dateString.split(".");
        var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    
        var today = new Date();
        var birthDate = new Date(dateObject);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }


    return (
        <div> 
           { props ? 
        <Grid sx={{display:"flex", flexDirection: "column"}}> 
        <Typography
                sx={{
                  textAlign: "left",
                  color: "black",
                  textDecoration: "bold",
                  fontSize: 18,
                }}
              >
                <b> Informace o fyzických charakteristikách: </b>
                <hr/>
              </Typography>

        <Box
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <Typography sx={{ textAlign: "left", flexGrow: 1, mb: 3 }}>
          <b> Pohlaví: </b> {props.zvire.pohlavi}
        </Typography>

        <Typography sx={{ textAlign: "left", flexGrow: 1 }}>
          <b> Váha: </b> { props.hmotnost.length !== 0  ? props.hmotnost[props.hmotnost.length-1].hmotnost : "Nezadáno"}
        </Typography>

        <Typography sx={{ textAlign: "left", flexGrow: 1 }}>
          <b> Věk: </b> {getVek(props.zvire.datum_narozeni)}
        </Typography>
      </Box>
      </Grid> : null}
      </div>
    )


}