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
          <Button color="primary">Portfolio</Button>
          <Button color="primary">Experience</Button>
          <Button color="primary">Skills</Button>
          <Button color="primary">Customers</Button>
          <Button color="primary">Values</Button>
          <Button color="primary">Contact</Button>
        </Toolbar>
      </AppBar>
  );
}
