import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Authorization, { hasAccess } from "../../services/Authorization";

import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

export default function SmazatZvire(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        sx={{
          backgroundColor: "error.main",
          ":hover": {
            bgcolor: "error.light", // theme.palette.primary.main
            color: "white",
          },
          fontSize: 12,
          pt: 1,
          pb: 1,
          ml: 1,
        }}
        variant="contained"
        onClick={props.smazatZvire}
      >
        Smazat Zvíře
      </Button>
    </div>
  );
}
