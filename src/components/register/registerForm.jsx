import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

class RegisterForm extends React.Component {
  register = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(process.env.REACT_APP_APISERVER + "register", {
      method: "POST",
      headers: {},
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {});
  };
  render() {
    return (
      <div>
        <h1>Registracni formular</h1>
        <br></br>
        <form method="POST" onSubmit={this.register}>
          <FormControl variant="standard">
            <TextField
              className="prihlasovaciLabel"
              id="outlined-basic"
              label="Vase prihlasovaci jmeno*"
              variant="outlined"
              name="uzivatel_jmeno"
              onChange={this.onChange}
            />
            <br></br>
            <TextField
              name="heslo"
              className="prihlasovaciLabel"
              id="outlined-basic"
              label="Vase heslo*"
              variant="outlined"
              onChange={this.onChange}
              type="password"
            />
            <br></br>
            <TextField
              name="email"
              className="prihlasovaciLabel"
              id="outlined-basic"
              label="Vas e-mail*"
              variant="outlined"
              onChange={this.onChange}
            />
            <br></br>
            <Button type="submit" variant="contained" color="info">
              Registrace
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
