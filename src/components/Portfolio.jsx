import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AmazonTracker from "../assets/img/amazon_icon.png";
import MercadoTracker from "../assets/img/mercado_icon.png";
import Memo from "../assets/img/memo_icon.jpeg";
import Adriana from "../assets/img/adriana_icon.png";
import TuChofer from "../assets/img/tu-chofer.png";
import CamaronPelao from "../assets/img/camaron-pelao.png";
import Container from "@material-ui/core/Container";
import MinSizedBox from "./MinSizedBox";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <Container>
        <MinSizedBox />
        <Typography variant="h2" component="h2" className="title">
          Portfolio
        </Typography>
        <Typography variant="h5" component="h5" className="subtitle">
          Just an example of my work
        </Typography>
        <MinSizedBox />
        <Grid container  spacing={4}>
          <Grid item xs={6} md={2}>
            <div>
              <img
                src={AmazonTracker}
                alt="Amazon tracker"
                className="proyect-icons"
              />
              <Typography id="app">Amazon price tracker</Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div>
              <img
                src={MercadoTracker}
                alt="Mercado tracker"
                className="proyect-icons"
              />
              <Typography id="app">
                Mercado Libre price tracker
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div>
              <img src={Memo} alt="Memo" className="proyect-icons" />
              <Typography id="app">Memo Toscano's App</Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div>
              <img src={Adriana} alt="Adriana" className="proyect-icons" />
              <Typography id="app">Adriana's Classroom</Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div>
              <img
                style={{ backgroundColor: "#FFF" }}
                src={TuChofer}
                alt="Tu Chofer App"
                className="proyect-icons"
              />
              <Typography id="app">Tu Chofer</Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div>
              <img
                style={{ backgroundColor: "#AAA" }}
                src={TuChofer}
                alt="Tu Chofer Web"
                className="proyect-icons"
              />
              <Typography id="app">Tu Chofer Dashboard</Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div>
              <img
                style={{ backgroundColor: "#333" }}
                src={CamaronPelao}
                alt="Camaron Pelao"
                className="proyect-icons"
              />
            </div>
            <Typography id="app">School project</Typography>
          </Grid>
        </Grid>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319" style={{display:'block'}}>
  <path fill="#60D3EA" fillOpacity="1" d="M0,192L60,165.3C120,139,240,85,360,80C480,75,600,117,720,144C840,171,960,181,1080,165.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
    </div>
  );
}
