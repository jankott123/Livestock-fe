import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
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
import { Typography } from "@mui/material";

export default function Editace(props) {
  const [open, setOpen] = useState(false);
  const [pohlavi, setPohlavi] = React.useState(props.zvire.datum);
  const [dojene, setDojene] = React.useState(props.zvire.datum);
  const textFieldsName = ["matka", "otec"];
  const textFieldsLabel = ["Matka", "Otec"];

  var dateParts = props.zvire.datum_narozeni.split(".");
  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

  const [value, setValue] = useState(dateObject);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event) => {
    setPohlavi(event.target.value);
  };

  const handleChange3 = (event) => {
    setDojene(event.target.value);
  };

  return (
    <div>
      <Button onClick={() => setOpen(!open)} variant="contained">
        {" "}
        Editovat{" "}
      </Button>
      <Dialog open={open} maxWidth="md">
        <Grid lg={6}>
          <Typography
            sx={{
              textAlign: "left",
              borderBottom: 1,
              ml: 12,
              mt: 4,
              fontSize: 26,
              fontWeight: "bold",
            }}
          >
            Editovat zvíře
          </Typography>
        </Grid>

        <form method="POST" onSubmit={props.editovatZvire}>
          <FormControl size="large" sx={{ m: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  p: 0,
                  ml: 10,
                  mr: 10,
                  mb: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  className="prihlasovaciLabel"
                  id="outlined-basic"
                  label="Identifikační číslo zvířete"
                  variant="outlined"
                  name="identif_cislo"
                  margin="normal"
                  defaultValue={props.zvire.identifikacni_cislo}
                  sx={{ width: 350 }}
                />

                <TextField
                  id="outlined-select-currency"
                  select
                  label="Vybrat pohlaví"
                  value={pohlavi}
                  onChange={handleChange2}
                  margin="normal"
                  name="pohlavi"
                  defaultValue={props.zvire.pohlavi}
                >
                  <MenuItem value="samice">Samice</MenuItem>
                  <MenuItem value="samec">Samec</MenuItem>
                </TextField>

                <TextField
                  className="prihlasovaciLabel"
                  id="outlined-basic"
                  label="Plemeno"
                  variant="outlined"
                  name="plemeno"
                  margin="normal"
                  defaultValue={props.zvire.plemeno}
                />

                <TextField
                  id="outlined-select-currency"
                  select
                  label="Dojené"
                  value={dojene}
                  onChange={handleChange3}
                  margin="normal"
                  name="dojene"
                  defaultValue={props.zvire.dojene}
                >
                  <MenuItem value="ano">Ano</MenuItem>
                  <MenuItem value="ne">Ne</MenuItem>
                </TextField>
              </Box>

              <Box
                sx={{ mt: 2, mr: 2, display: "flex", flexDirection: "column" }}
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Datum narození zvířete"
                    inputFormat="dd/MM/yyyy"
                    onChange={handleChange}
                    value={value}
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
                  color="info"
                  variant="contained"
                  size="large"
                >
                  Potvrdit změnu
                </Button>
              </Box>
            </Box>
          </FormControl>
        </form>
      </Dialog>
    </div>
  );
}
