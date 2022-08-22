import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@material-ui/core/Dialog";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function PridatMajitele(props) {
  const [open, setOpen] = useState(false);

  const osobni = ["Jméno", "Příjmení", "Telefon", "Email"];
  const bydliste = ["Ulice", "Číslo_popisné", "Město", "Psč"];

  return (
    <div>
      {props.majitel !== null ? (
        <div>
          <Fab
            onClick={() => setOpen(!open)}
            color="secondary"
            style={{ height: 15, width: 35 }}
            sx={{ mr: 0, mt: -1 }}
            aria-label="edit"
          >
            <EditIcon style={{ height: 18, width: 25 }} />
          </Fab>

          <Dialog open={open} maxWidth="lg">
            {" "}
            <Typography
              onClick={() => setOpen(!open)}
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
                Hospodář
              </Typography>
            </Box>
            <form method="POST" onSubmit={props.editovat}>
              <Box sx={{ mt: 1, ml: 8, mr: 8, mb: 5, pb: 6 }}>
                <FormControl size="large">
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", mr: 6 }}
                    >
                      <Typography
                        sx={{
                          fontSize: 16,
                          mb: 1,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Osobní údaje{" "}
                      </Typography>
                      {osobni.map((osob, i) => (
                        <TextField
                          id="outlined-basic"
                          label={osob}
                          name={osob}
                          variant="outlined"
                          defaultValue={props.majitel[i]}
                          sx={{ width: 350, mb: 2 }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          mb: 1,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Adresa
                      </Typography>
                      {bydliste.map((bydli, i) => (
                        <TextField
                          id="outlined-basic"
                          label={bydli}
                          name={bydli}
                          variant="outlined"
                          defaultValue={props.majitel[4 + i]}
                          sx={{ width: 350, mb: 2 }}
                        />
                      ))}

                      <Button
                        sx={{ maxWidth: 300, ml: 25, mt: 0 }}
                        onClick={() => setOpen(!open)}
                        type="submit"
                        color="success"
                        variant="contained"
                        size="large"
                      >
                        Potvrdit
                      </Button>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
            </form>
          </Dialog>
        </div>
      ) : null}
    </div>
  );
}
