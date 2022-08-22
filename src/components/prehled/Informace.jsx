import * as React from "react";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import { Box, Typography } from "@mui/material";



export default function Informace(props) {
    const[zvirata,setZvirata]= useState(null);
    const[staje,setStaje]= useState(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        await hasAccess();
    
        fetch(process.env.REACT_APP_APISERVER + "pocetZviratAStaji", {
          method: "GET",
          credentials: "include",
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
           setZvirata(data[1]);
           setStaje(data[0]);
          });
      }, []);
      
  return (
    <div>
      <Typography sx={{ fontSize: 17, mb: 1, mt:1, fontWeight: "bold" }}>
        {" "}
        Počet všech chovaných zvířat: {zvirata}{" "}
      </Typography> 
      <Typography sx={{ fontSize: 17, mb: 1, fontWeight: "bold" }}> Počet stájí: {staje} </Typography>
    
    </div>
  );
}
