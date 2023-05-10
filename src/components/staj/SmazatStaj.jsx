import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Authorization, { hasAccess } from "../../services/Authorization";
import { Typography } from "@mui/material";

class SmazatStaj extends React.Component {
  state = {
    open: false,
  };

  smazat = () => {
    this.props.smazat();
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <Button
          sx={{
            backgroundColor: "error.main",
            ":hover": {
              bgcolor: "error.light", // theme.palette.primary.main
              color: "white",
            },
            fontSize: 13,
          }}
          onClick={() => this.setState({ open: !this.state.open })}
          variant="contained"
        >
          Smazat stáj
        </Button>

        <Dialog open={this.state.open}>
          <Box sx={{ m: 4 }}>
            <Box>
              <Typography> Opravdu si přejete smazat stáj? </Typography>
              <Typography sx={{ fontSize: 16 }}>
                {" "}
                Se smazáním stáje se smažou veškerá zvířata ve stáji.{" "}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
              }}
            >
              <Button onClick={() => this.setState({ open: !this.state.open })}>
                {" "}
                Ne{" "}
              </Button>
              <Button color="error" onClick={(event) => this.smazat(event)}>
                {" "}
                Ano{" "}
              </Button>
            </Box>
          </Box>
        </Dialog>
      </div>
    );
  }
}

export default SmazatStaj;
