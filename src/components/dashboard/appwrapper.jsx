import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Navigate } from "react-router-dom";
import SideBox from "../menu/sidebox";

import NavBar from "../navbar/navbar";
import { Outlet, Link } from "react-router-dom";
import { withStyles } from "@mui/styles";

const styles = {
  fabStyle: {
    height: "5",
    width: "10",
  },
};

class AppWrapper extends React.Component {
  render() {
    return (
      <div>
      <SideBox> </SideBox>
      </div>
    );
  }
}

export default withStyles(styles)(AppWrapper);
