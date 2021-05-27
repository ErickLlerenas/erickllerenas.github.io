import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default function Experience() {
  return (
    <div className="bg">
      <section id="experience">
        <Container>
          <Grid container>
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={3} md={3}>
              <Typography id="xp">1+</Typography>
            </Grid>
            <Grid
              item
              xs={7}
              md={7}
              container
              direction="column"
              justify="center"
              alignItems="flex-end"
            >
              <Grid item>
                <Typography id="years">
                  Years of freelancer experience building web and mobile
                  aplications.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319" style={{display:'block'}}>
        <path
          fill="#60D3EA"
          fillOpacity="1"
          d="M0,192L60,165.3C120,139,240,85,360,80C480,75,600,117,720,144C840,171,960,181,1080,165.3C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
