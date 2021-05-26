import React from "react";
import Erick from "../assets/img/me.png";
// import logo from "../assets/svgs/logo.svg";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// components
import Name from "./Name";
import Age from "./Age";
import MyAppBar from "./MyAppBar";
import SizedBox from "./SizedBox";
import MinSizedBox from "./MinSizedBox";

export default function Header() {
  return (
    <header className="header">
      <Container style={{ height: "100%", zIndex: "1" }}>
        <Grid container style={{ height: "100%" }}>
          <Grid item xs={12} md={12}>
            <MyAppBar />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            container
            direction="column"
            justify="space-evenly"
            alignItems="flex-start"
          >
            <Grid item>
              <MinSizedBox />
            </Grid>
            <Grid item className="grid-name">
              <Name />
            </Grid>
            <Grid item>
              <Age />

              <Typography>I'm a passionate Front-End Developer,</Typography>
              <Typography>UX/UI Lover🧡.</Typography>
              <Typography>Spanish and english spoken.</Typography>
            </Grid>
            <Grid item className="hireme">
              <Button variant="contained" color="primary">
                Hire Me
              </Button>
             
            </Grid>
            <Grid item>
                <SizedBox />
              </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item>
              <img src={Erick} alt="Erick" className="erick" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className="circle"></div>
    </header>
  );
}
