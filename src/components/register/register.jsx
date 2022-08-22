import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RegisterForm from "./registerForm";

class Register extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Grid container spacing={2}>
           
              <Grid item xs={12}>
              <div class="prihlasovaciFormular">
              <RegisterForm></RegisterForm>
                </div>
              </Grid>
            
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Register;
