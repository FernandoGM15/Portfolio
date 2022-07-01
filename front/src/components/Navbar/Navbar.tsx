import { Component } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button
} from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="navbar" style={{ position: "fixed" }}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Link to="/"><Button >Home</Button></Link>
            </Box>
            <Box>
              <Link to="/about"><Button >About</Button></Link>
              <Link to="/contact"><Button >Contact</Button></Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    );
  }
}

export default Navbar;
