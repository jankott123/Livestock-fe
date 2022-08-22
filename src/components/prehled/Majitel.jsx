import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import GrafZastoupeni from "../zvirata/GrafZastoupeni";
import GrafDojene from "../zvirata/GrafDojene";
import GrafStaje from "../zvirata/GrafStaje";

export default function Majitel(props) {
  return (
    <div>
      <Box sx={{ display: "flex", mt: 1, flexDirection: "column" }}>
        <Box sx={{ mb: 1 }}>
          {" "}
          <Typography
            sx={{
              fontSize: 17,
              mb: 1,
              display: "inline",
              mt: 1,
              fontWeight: "bold",
            }}
          >
            {" "}
            Jméno:{" "}
          </Typography>{" "}
          <Typography sx={{ display: "inline", fontSize: 17, mb: 1 }}>
            {" "}
            {props.majitel.jmeno}{" "}
          </Typography>{" "}
        </Box>
        <Box sx={{ mb: 1 }}>
          {" "}
          <Typography
            sx={{
              fontSize: 17,
              mb: 1,
              display: "inline",
              mt: 1,
              fontWeight: "bold",
            }}
          >
            {" "}
            Příjmení:{" "}
          </Typography>{" "}
          <Typography sx={{ display: "inline", fontSize: 17, mb: 1 }}>
            {" "}
            {props.majitel.prijmeni}{" "}
          </Typography>{" "}
        </Box>
        <Box sx={{ mb: 1 }}>
          {" "}
          <Typography
            sx={{ fontSize: 17, mb: 1, display: "inline", fontWeight: "bold" }}
          >
            {" "}
            Adresa:{" "}
          </Typography>{" "}
          <Typography sx={{ display: "inline", fontSize: 17, mb: 1 }}>
            {" "}
            {props.majitel.ulice +
              " " +
              props.majitel.cislo_popisne +
              ", " +
              props.majitel.mesto +
              " " +
              props.majitel.psc}{" "}
          </Typography>{" "}
        </Box>
        <Box sx={{ mb: 1 }}>
          {" "}
          <Typography
            sx={{ fontSize: 17, mb: 1, display: "inline", fontWeight: "bold" }}
          >
            {" "}
            Email:{" "}
          </Typography>{" "}
          <Typography sx={{ display: "inline", fontSize: 17, mb: 1 }}>
            {props.majitel.email}{" "}
          </Typography>{" "}
        </Box>
        <Box sx={{ mb: 1 }}>
          {" "}
          <Typography
            sx={{ fontSize: 17, mb: 1, display: "inline", fontWeight: "bold" }}
          >
            {" "}
            Telefon:{" "}
          </Typography>{" "}
          <Typography sx={{ display: "inline", fontSize: 17, mb: 1 }}>
            {" "}
            {props.majitel.telefon}{" "}
          </Typography>{" "}
        </Box>
      </Box>
    </div>
  );
}
