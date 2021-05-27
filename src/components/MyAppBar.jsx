import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function MyAppBar() {
  return (
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography variant="h6" className="appbar-title">
            Erick Llerenas
          </Typography>
          <a href="#portfolio">
          <Button color="primary">Portfolio</Button>

          </a>
          <a href="#experience">
          <Button color="primary">Experience</Button>
          </a>
          <Button color="primary">Skills</Button>
          <a href="#customers">
          <Button color="primary">Customers</Button>

          </a>
          <Button color="primary">Values</Button>
          <a href="#contact">
          <Button color="primary">Contact</Button>

          </a>
        </Toolbar>
      </AppBar>
  );
}
