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
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

class StajPridat extends React.Component {
  state = {
    open: false,
    value: null,
  };

  changeValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Button
          sx={{
            backgroundColor: "success.dark",
            fontSize: 13,
            ":hover": {
              bgcolor: "success.light", // theme.palette.primary.main
              color: "white",
            },
          }}
          onClick={() => this.setState({ open: !this.state.open })}
          variant="contained"
        >
          Vytvořit stáj
        </Button>
        <Dialog open={this.state.open}>
          {" "}
          <Typography
            onClick={() => this.setState({ open: !this.state.open })}
            sx={{ textAlign: "right", mt: 1, mr: 1 }}
          >
            {" "}
            <CloseIcon> </CloseIcon>{" "}
          </Typography>{" "}
          <Box sx={{ mb: 3 }} lg={1}>
            <Typography
              sx={{
                fontSize: 22,
                fontFamily: "Helvetica",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {" "}
              VYTVOŘENÍ STÁJE{" "}
            </Typography>
          </Box>
          <form method="POST" onSubmit={this.props.create}>
            <Box sx={{ mt: 1, ml: 8, mr: 8, mb: 5, pb: 6 }}>
              <FormControl size="large">
                <TextField
                  id="outlined-basic"
                  label="Název stáje"
                  name="staj_name"
                  variant="outlined"
                  sx={{ width: 350 }}
                />
                <br></br>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Chovaná zvířata"
                  name="vyber_zvirete"
                  helperText="Vyberte zvířata"
                  value={this.state.value}
                  onChange={this.changeValue}
                >
                  <MenuItem value="Ovce">Ovce</MenuItem>
                  <MenuItem value="Skot">Skot</MenuItem>
                  <MenuItem value="Kozy">Kozy</MenuItem>
                </TextField>
                <br></br>
                <Button
                  onClick={() => this.setState({ open: !this.state.open })}
                  type="submit"
                  color="success"
                  variant="contained"
                  size="large"
                >
                  Vytvořit
                </Button>
              </FormControl>
            </Box>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default StajPridat;
