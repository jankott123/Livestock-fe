import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    navigate: false,
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = (event) => {
    event.preventDefault();

    fetch(process.env.REACT_APP_APISERVER + "login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((res) => {
        sessionStorage.setItem("prihlasen", "true");
        this.setState({
          navigate: true,
        });
      })

      .catch((error) => {
        alert("Login failed");
      });
  };

  render() {
    return (
      <div>
        {this.state.navigate ? <Navigate to="/prehled" /> : false}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            pt: 6,
            mb: 3,
          }}
        >
          <Box>
            {" "}
            <Typography sx={{ fontSize: 35, mt: 10, ml: 3 }}>
              {" "}
              Evidence chovného dobytka{" "}
            </Typography>{" "}
          </Box>
          <Box sx={{ backgroundColor: "white" }}>
            {" "}
            <Box
              component="img"
              sx={{
                height: 110,
                width: 120,
                maxHeight: { xs: 153, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                pt: 4,
                ml: 0,
                pl: 0,
              }}
              alt="The house from the offer."
              src="login_cow.svg"
            />{" "}
          </Box>
        </Box>

        <Box
          lg={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <form method="POST">
            <FormControl variant="standard">
              <TextField
                className="prihlasovaciLabel"
                id="outlined-basic"
                label="Přihlašovací jméno*"
                variant="outlined"
                name="uzivatel_jmeno"
                sx={{ width: 300 }}
                onChange={this.onChange}
              />
              <br></br>
              <TextField
                name="heslo"
                className="prihlasovaciLabel"
                id="outlined-basic"
                label="Heslo*"
                variant="outlined"
                onChange={this.onChange}
                type="password"
              />
              <br></br>
              <Button onClick={this.login} variant="contained" color="success">
                Přihlásit se
              </Button>
            </FormControl>
          </form>

          <Typography sx={{ mt: 2, fontSize: 19 }}>
            {" "}
            Nemáte účet? Registrujte se <Link to="/registrace">zde</Link>{" "}
          </Typography>
        </Box>
      </div>
    );
  }
}

export default LoginForm;
