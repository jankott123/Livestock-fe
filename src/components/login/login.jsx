import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LoginForm from "./loginForm";
import { withStyles } from "@mui/styles";

class Login extends React.Component {
  render() {
    return (
      <div>
        <LoginForm> </LoginForm>
      </div>
    );
  }
}

export default (Login);
