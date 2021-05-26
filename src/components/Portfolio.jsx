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
import SizedBox from "./SizedBox";
import MinSizedBox from "./MinSizedBox";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Container style={{ zIndex: "1", position: "relative" }}>
        <SizedBox />
        <Typography variant="h2" component="h2" className="title">
          Portfolio
        </Typography>
        <Typography variant="h5" component="h5" className="subtitle">
          Just an example of my work
        </Typography>
        <MinSizedBox/>
        <Grid container spacing={5}>
          <Grid item xs={6} md={2}>
            <div>
              <img
                src={AmazonTracker}
                alt="Amazon tracker"
                className="proyect-icons"
              />
            <Typography className="center">Amazon price tracker</Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div>
            <img
              src={MercadoTracker}
              alt="Mercado tracker"
              className="proyect-icons"
            />
            <Typography className="center">Mercado Libre price tracker</Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div>
            <img src={Memo} alt="Memo" className="proyect-icons" />
            <Typography className="center">Memo Toscano's App</Typography>

            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div>
            <img src={Adriana} alt="Adriana" className="proyect-icons" />
            <Typography className="center">Adriana's Classroom</Typography>
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
            <Typography className="center">Tu Chofer</Typography>
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
            <Typography className="center">Tu Chofer Dashboard</Typography>
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
            <Typography className="center">School project</Typography>
          </Grid>
        </Grid>
        <SizedBox />
      </Container>
    </div>
  );
}
