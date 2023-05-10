import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { withStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";

const styles = (theme) => ({
  root: {
    backgroundColor: "#1b5e20",
    zIndex: 2000,
  },
  zindex: {
    zIndex: 2000,
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
  },
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Box
            className={classes.zindex}
            sx={{
              flexGrow: 1,
              mt: 0,
              zIndex: 100,
            }}
          >
            <AppBar
              className={classes.root}
              position="relative"
              sx={{ backgroundColor: "success.dark" }}
            >
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Evidence zvirat
                </Typography>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>

                <Button color="inherit">Profil</Button>
              </Toolbar>
            </AppBar>
          </Box>
        </ThemeProvider>
      </div>
    );
  }
}

export default NavBar;
