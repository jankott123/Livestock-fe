import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@material-ui/core/Dialog";
import FormControl from "@mui/material/FormControl";
import Authorization, { hasAccess } from "../../services/Authorization";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import MenuItem from "@mui/material/MenuItem";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@material-ui/core";

function StajPridatZvire(props) {
  const [value, setValue] = useState(Date());
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(25);
  const [pohlavi, setPohlavi] = React.useState("");
  const [dojene, setDojene] = React.useState(" ");

  const [chovanyDruh, setChovanyDruh] = useState(props.chovany_druh);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const koza = ["koza", "kozel", "kůzle"];
  const ovce = ["ovce", "beran", "jehně"];
  const skot = ["dojnice", "jalovice", "tele", "býk"];
  const textFieldsName = ["matka", "otec"];
  const textFieldsLabel = ["Matka", "Otec"];
 
  const handleChange2 = (event) => {
    setPohlavi(event.target.value);
  };

  const handleChange3 = (event) => {
    setDojene(event.target.value);
  };

  return (
    <div>
      <Button
        sx={{ backgroundColor: "success" }}
        onClick={() => setOpen(!open)}
        variant="contained"
      >
        Pridat zvire
      </Button>
      <Dialog open={open} maxWidth="md">
        {" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                borderBottom: 1,
                ml: 10,
                mt: 4,
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              Přidání zvířete do stáje
            </Typography>
          </Box>

          <Typography onClick={() => setOpen(!open)} sx={{ mt: 2, mr: 2 }}>
            {" "}
            <CloseIcon
              sx={{ fontSize: size }}
              onMouseOver={() => setSize(30)}
              onMouseOut={() => setSize(25)}
            >
              {" "}
            </CloseIcon>{" "}
          </Typography>
        </Box>
        <form method="POST" onSubmit={props.pridatZvire}>
          <FormControl size="large" sx={{ mb: 1, p: 5, pt: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width:800,
              }}
            >
              <Box
                sx={{
                  p: 0,
                  ml: 5,
                  mr: 10,
                  mb: 2,
                  display: "flex",
                  flexDirection: "column",
                  width:350,
                }}
              >
                <TextField
                  className="prihlasovaciLabel"
                  id="outlined-basic"
                  label="Identifikační číslo zvířete"
                  variant="outlined"
                  name="identif_cislo"
                  margin="normal"
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Vybrat pohlaví"
                  value={pohlavi}
                  onChange={handleChange2}
                  margin="normal"
                  name="pohlavi"
                >
                  {props.chovany_druh === "Kozy"
                    ? koza.map((koz) => <MenuItem value={koz}>{koz}</MenuItem>)
                    : props.chovany_druh === "Ovce"
                    ? ovce.map((ovc) => <MenuItem value={ovc}>{ovc}</MenuItem>)
                    : props.chovany_druh === "Skot"
                    ? skot.map((skt) => <MenuItem value={skt}>{skt}</MenuItem>)
                    : null}
                </TextField>

                <TextField
                  className="prihlasovaciLabel"
                  id="outlined-basic"
                  label="Plemeno"
                  variant="outlined"
                  name="plemeno"
                  margin="normal"
                />

                <TextField
                  id="outlined-select-currency"
                  select
                  label="Dojené"
                  value={dojene}
                  onChange={handleChange3}
                  margin="normal"
                  name="dojene"
                >
                  <MenuItem value="ano">Ano</MenuItem>
                  <MenuItem value="ne">Ne</MenuItem>
                </TextField>
              </Box>

              <Box sx={{ mt: 2, display: "flex", flexDirection: "column",   width:450 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Datum narození zvířete"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                {textFieldsName.map((name, i) => (
                  <TextField
                    className="prihlasovaciLabel"
                    id="outlined-basic"
                    label={textFieldsLabel[i]}
                    variant="outlined"
                    name={name}
                    margin="normal"
                  />
                ))}
                
                <TextField
                  sx={{ display: "none" }}
                  className="prihlasovaciLabel"
                  id="outlined-basic"
                  label="Staj"
                  variant="outlined"
                  name="id_staje"
                  value={props.staj_cislo}
                />

                <TextField
                  sx={{ display: "none" }}
                  className="prihlasovaciLabel"
                  id="outlined-basic"
                  label="datum"
                  variant="outlined"
                  name="datum"
                  value={value}
                />

                <Button
                  sx={{ maxWidth: 300, ml: 25, mt: 5 }}
                  onClick={() => setOpen(!open)}
                  type="submit"
                  color="success"
                  variant="contained"
                  size="large"
                >
                  Přidat Zvíře
                </Button>
              </Box>
            </Box>
          </FormControl>
        </form>
      </Dialog>
    </div>
  );
}

export default StajPridatZvire;
