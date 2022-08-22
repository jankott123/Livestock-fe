import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import Graf from "./Graf";
import Grid from "@mui/material/Grid";
import { Box, MenuItem, Typography } from "@mui/material";
import Dialog from "@material-ui/core/Dialog";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import CloseIcon from "@mui/icons-material/Close";

export default function SmazatHmotnost(props) {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(25);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        variant="contained"
        color="error"
        sx={{ mr: 5, pb: 1 }}
      >
        Smazat Záznam
      </Button>

      <Dialog open={open} maxWidth="lg">
    <Box sx={{ display: "flex", flexDirection:"column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mt: 2,}}>
            <Typography
              sx={{
                textAlign: "center",
                ml:10,
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              Smazat záznam
            </Typography>
          </Box>

          <Typography onClick={() => setOpen(!open)} sx={{ mt: 2, mr: 1 }}>
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

        <Box sx={{ m:5, mt:0 }}>
          <form method="POST" onSubmit={props.smazat}>
            <FormControl sx={{ display: "flex", width: 300 }}>
              <TextField
                id="outlined-select-currency"
                select
                label="Vybrat záznam"
                margin="normal"
                name="hmotnost"
              >
                {props.hmotnost.map((hmot) => (
                  <MenuItem value={hmot.id} key={hmot.id}>
                    {hmot.datum + " [" + hmot.hmotnost + " kg]"}{" "}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                sx={{mt:2}}
                onClick={() => setOpen(!open)}
                type="submit"
                color="error"
                variant="contained"
                size="large"
                
              >
                Smazat Záznam
              </Button>
            </FormControl>
          </form>
        </Box>
        </Box>
      </Dialog>
    </div>
  );
}
