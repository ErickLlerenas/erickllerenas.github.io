import { Card, Container, Grid } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import MinSizedBox from "./MinSizedBox";
import Instagram from "../assets/svgs/instagram.svg";
import WhatsApp from "../assets/svgs/whatsapp.svg";
import GitHub from "../assets/svgs/github.svg";
import LinkedIn from "../assets/svgs/linkedin.svg";
import Button from "@material-ui/core/Button";

export default function Contact() {
  return (
    <section className="bg" id="contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319" style={{display:'block'}}>
        <path
          fill="#eee"
          fill-opacity="1"
          d="M0,0L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
      <div style={{ backgroundColor: "#eee" }}>
        <Container>
          <Card>
            <MinSizedBox />

            <Typography variant="h2" component="h2" className="title">
              Contact
            </Typography>
            <Typography variant="h5" component="h5" className="subtitle">
              Let's create something amazing
            </Typography>
            <MinSizedBox />

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <a
                  href="https://www.instagram.com/erick.llerenas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Instagram} alt="Instagram" style={{ height: 55 }} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://wa.me/+523121811727"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={WhatsApp} alt="Whatsapp" style={{ height: 55 }} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://github.com/ErickLlerenas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GitHub} alt="Github" style={{ height: 55 }} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.linkedin.com/in/erick-llerenas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LinkedIn} alt="Instagram" style={{ height: 55 }} />
                </a>
              </Grid>
            </Grid>
            <MinSizedBox />
            <Typography variant="h5" component="h5" className="subtitle">
              dev.llerenas@gmail.com
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <MinSizedBox />
                <a href="mailto:dev.llerenas@gmail.com?Subject=Hi, nice to meet you! I'm interested on working with you...">
                <Button variant="contained" color="primary">
                  Hire Me
                </Button>
                </a>
                <MinSizedBox />
              </Grid>
            </Grid>
          </Card>
          <MinSizedBox />
        </Container>
      </div>
    </section>
  );
}
