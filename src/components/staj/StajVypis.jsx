import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Authorization, { hasAccess } from "../../services/Authorization";
import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StajDetail from "./StajDetail";
import { withStyles } from "@mui/styles";

class StajVypis extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selection: null,
  };

  columns = [
    { field: "id", headerName: "Číslo stáje", width: 150, editable: true },
    { field: "nazev", headerName: "Název", width: 200 },
    { field: "datum", headerName: "Datum vytvoření", width: 200 },
    { field: "pocet_zvirat", headerName: "Počet zvířat", width: 200 },
    { field: "druh", headerName: "Chovaný druh", width: 200 },
    {
      field: " ",
      headerName: " ",
      width: 200,
      renderCell: (rowData) => (
        <Link
          style={{ textDecoration: "none" }}
          to={`/staj/${rowData.id}`}
          state={{
            idnove: "text",
            id: rowData.id,
            info: this.props.staje,
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
            <Typography sx={{ fontSize: 14 }}>Zobrazit stáj</Typography>{" "}
          </Button>{" "}
        </Link>
      ),
    },
  ];

  render() {
    return (
      <div>
        <div style={{ height: 550, width: "100%" }}>
          <DataGrid
            rows={this.props.staje}
            columns={this.columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onRowClick={(newSelectionModel) => {
              this.props.oznacene_staje(newSelectionModel);
            }}
          />
        </div>
      </div>
    );
  }
}

export default StajVypis;
