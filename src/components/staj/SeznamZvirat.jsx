import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Authorization, { hasAccess } from "../../services/Authorization";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@material-ui/data-grid";

function SeznamZvirat(props) {
  const columns = [
    {
      field: "identifikacni_cislo",
      headerName: "Identifikační číslo",
      width: 300,
    },
    { field: "nazev_druhu", headerName: "Druh_zvirete", width: 230 },
    { field: "pohlavi", headerName: "Pohlaví", width: 230 },
    { field: "plemeno", headerName: "Plemeno", width: 230 },
    { field: "dojene", headerName: "Dojené", width: 230 },
    {
      field: " ",
      headerName: "",
      width: 230,
      renderCell: (rowData) => (
        <Link
          to={`/zvire/${rowData.id}`}
          style={{ textDecoration: "none" }}
          state={{
            id: rowData.id,
          }}
        >
          {" "}
          <Button
            sx={{
              backgroundColor: "info.light",
              color: "white",
              ml: 4,
              ":hover": {
                bgcolor: "primary.main",
                color: "white",
              },
            }}
          >
            {" "}
            <Typography sx={{ fontSize: 14 }}>Zobrazit Zvíře</Typography>{" "}
          </Button>{" "}
        </Link>
      ),
    },
  ];

  return (
    <div>
      <h3> Aktuálně chovaná zvířata ve stáji:</h3>
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={props.zvirata}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[25]}
          onSelectionModelChange={(newSelectionModel) => {
            props.oznaceniZvire(newSelectionModel);
          }}
        />
      </div>
    </div>
  );
}

export default SeznamZvirat;
