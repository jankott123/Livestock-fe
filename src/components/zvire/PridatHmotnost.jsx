import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import Graf from "./Graf";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import CloseIcon from "@mui/icons-material/Close";
export default function PridatHmotnost(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(Date());
  const [size, setSize] = useState(25);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        variant="contained"
        color="success"
      >
        Přidat záznam
      </Button>

      <Dialog open={open} maxWidth="md" sx={{}}>
        {" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{
                textAlign: "center",
                ml: 10,
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              Přidat záznam
            </Typography>
          </Box>

          <Typography onClick={() => setOpen(!open)} sx={{ mt: 1, mr: 1 }}>
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
        <form method="POST" onSubmit={(e) => props.pridatHmotnost(e, props.id)}>
          <FormControl sx={{ m: 2 }}>
            <TextField
              className="prihlasovaciLabel"
              id="outlined-basic"
              label="Hmotnost v Kg"
              variant="outlined"
              name="hmotnost"
              margin="normal"
              type="number"
            />
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Datum vážení zvířete"
                inputFormat="dd/MM/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <br />

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
              sx={{}}
              onClick={() => setOpen(!open)}
              type="submit"
              color="success"
              variant="contained"
              size="large"
            >
              Přidat Záznam
            </Button>
          </FormControl>
        </form>
      </Dialog>
    </div>
  );
}
