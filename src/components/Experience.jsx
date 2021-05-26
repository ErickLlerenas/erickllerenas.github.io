import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import SizedBox from "./SizedBox";

export default function Experience() {
  return (
    <Container>
      <SizedBox />
      <Grid container>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={3} md={3}>
          <Typography id="xp">1+</Typography>
        </Grid>
        <Grid item xs={7} md={7} container
            direction="column"
            justify="center"
            alignItems="flex-end">
          
            <Grid item>
              <Typography id="years">Years of freelancer experience building web and mobile aplications.</Typography>
            </Grid>
        </Grid>
      </Grid>
      <SizedBox />
    </Container>
  );
}
