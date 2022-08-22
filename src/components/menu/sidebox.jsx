import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { Outlet, Link } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { withStyles } from "@mui/styles";

const styles = {
  fabStyle: {
    height: "5",
    width: "10",
  },
};

class SideBox extends React.Component {
  render() {

    
    return (
      <Box sx={{ display: "flex" }}>
       
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor:"#008000"}}
          >
            <Toolbar>
              <Typography variant="h5" component="div" sx={{textAlign:"left", flexGrow: 1 }}>
                Evidence chovného dobytka
              </Typography>
              
              
            </Toolbar>
          </AppBar>
      
        <Drawer
          variant="permanent"
          sx={{
            width: 100,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 150, boxSizing: "border-box" },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
            <ListItem component={Link} to={"/prehled"} button>
                {" "}
                <ListItemIcon sx={{mr:-1}}>
                  <InsertChartIcon />
                </ListItemIcon>
                <Typography sx={{ fontSize: 18 }}>Přehled</Typography>
              </ListItem>

              <ListItem component={Link} to={"/staj"} button>
                {" "}
                <ListItemIcon sx={{mr:-1}}>
                  <HomeIcon />
                </ListItemIcon>
                <Typography sx={{ fontSize: 18 }}>Stáje</Typography>
              </ListItem>

              <ListItem component={Link} to={"/zvirata"} button>
                {" "}
                <ListItemIcon sx={{mr:-1}} >
                  <img src={process.env.PUBLIC_URL + '/animal.png'} alt="zvire" style={{ height: 20 }} />
                </ListItemIcon>
                <Typography sx={{ fontSize: 18 }}>Zvířata </Typography>{" "}
              </ListItem>

          
            </List>
          </Box>
        </Drawer>
        <Toolbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(SideBox);
