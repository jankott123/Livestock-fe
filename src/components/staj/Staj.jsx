import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Authorization, { hasAccess } from "../../services/Authorization";
import StajPridat from "./StajPridat";
import SmazatStaj from "./SmazatStaj";
import StajVypis from "./StajVypis";
import Zvirata from "../zvirata/Zvirata";
import { flexbox } from "@mui/system";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { withStyles } from "@mui/styles";

class Staj extends React.Component {
  state = {
    staj: [],
    oznacene_staje: [],
    potvrzeni: false,
  };
  async componentDidMount() {
    await hasAccess();
    fetch(process.env.REACT_APP_APISERVER + "staj", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          staj: result,
        });
      });
  }

  createStaj = async (event) => {
    event.preventDefault();
    this.setState({ open: !this.state.open });
    const data = new FormData(event.target);
    await hasAccess();
    fetch(process.env.REACT_APP_APISERVER + "staj", {
      method: "POST",
      credentials: "include",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          staj: result,
        });
      });
  };

  oznaceniStaji = async (staje_id) => {
    // await this.componentDidMount();

    this.setState({
      oznacene_staje: staje_id,
    });
  };

  deleteStaj = async (event) => {
    this.setState({ open: !this.state.open });
    await hasAccess();

    fetch(
      process.env.REACT_APP_APISERVER + "staj/" + this.state.oznacene_staje,
      {
        method: "DELETE",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          staj: result,
        });
      });
  };

  render() {
    return (
      <div>
        <Grid item sx={{ mt: 8, mb: 2, ml: 0 }} xs={12}>
          <Typography
            sx={{ fontSize: 22, fontFamily: "Helvetica", textAlign: "left" }}
          >
            {" "}
            STÁJE{" "}
          </Typography>
          <Divider></Divider>
        </Grid>

        <Grid item sx={{ ml: 0, display: "flex" }} xs={6}>
          <Box sx={{ mr: 1 }}>
            {" "}
            <StajPridat create={this.createStaj}> </StajPridat>{" "}
          </Box>
          <Box sx={{ mr: 3 }}>
            {" "}
            <SmazatStaj smazat={this.deleteStaj}> </SmazatStaj>{" "}
          </Box>
        </Grid>
        <Grid item sx={{ ml: 0, mt: 2 }} lg={12} xs={11}>
          <StajVypis
            oznacene_staje={this.oznaceniStaji}
            staje={this.state.staj}
          >
            {" "}
          </StajVypis>
        </Grid>
      </div>
    );
  }
}

export default Staj;
