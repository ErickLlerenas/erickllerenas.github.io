//Antonio Andrade
//Maestra Adriana
//Memo Toscano
//Eduardo
//Conchis
import React from "react";
import Container from "@material-ui/core/Container";
import { Card, Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AntonioAndrade from "../assets/img/antonio_andrade.jpeg";
import MemoToscano from "../assets/img/memo_toscano.jpeg";
import Conchi from "../assets/img/conchi.jpeg";
import Eduardo from "../assets/img/eduardo.jpeg";
import Typography from "@material-ui/core/Typography";
import MinSizedBox from "./MinSizedBox";

export default function Customers() {
  return (
    <div>
      <svg
        style={{ display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
      >
        <path
          fill="#14A2B8"
          fillOpacity="1"
          d="M0,128L1440,288L1440,0L0,0Z"
        ></path>
      </svg>
      <Container>
        <Typography variant="h2" component="h2" className="title">
          Customers
        </Typography>
        <Typography variant="h5" component="h5" className="subtitle">
          Happy customers who had hired me
        </Typography>
        <MinSizedBox />
        <Grid container>
          <Grid item md={7} xs={12} container>
              <Grid item xs={4} md={6}>
                <Avatar
                  alt="Antonio Andrade"
                  src={AntonioAndrade}
                  className="avatar right"
                ></Avatar>
              </Grid>
              <Grid
                item
                xs={8}
                md={6}
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                >
                <Card style={{padding:'25px 50px',borderRadius:'50px 10px'}}>
                  <Typography>Qué bueno que Mariana me puso en contacto contigo! Te quedó mejor de lo que esperaba.</Typography>
                </Card>
              </Grid>
          </Grid>
        </Grid>
        <MinSizedBox/>
        <Grid container>
          <Grid item md={5} xs={12}></Grid>
          <Grid item md={7} xs={12}container>
          <Grid
                item
                md={6}
                xs={8}
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
                >
                <Card style={{padding:'25px 50px',borderRadius:'50px 10px'}}>
                  <Typography>Muy bien.</Typography>
                </Card>
              </Grid>
              <Grid item md={6} xs={4}>
                <Avatar
                  alt="Memo Toscano"
                  src={MemoToscano}
                  className="avatar"
                ></Avatar>
              </Grid>
             
          </Grid>
        </Grid>

        <MinSizedBox />
        <Grid container>
          <Grid item xs={12} md={7} container>
              <Grid item xs={4} md={6}>
                <Avatar
                  alt="Eduardo"
                  src={Eduardo}
                  className="avatar right"
                ></Avatar>
              </Grid>
              <Grid
                item
                xs={8}
                md={6}
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                >
                <Card style={{padding:'25px 50px',borderRadius:'50px 10px'}}>
                  <Typography>Eres muy profesional en la forma en que trabajas.</Typography>
                </Card>
              </Grid>
          </Grid>
        </Grid>
        <MinSizedBox/>
        <Grid container>
          <Grid item md={5} xs={12}></Grid>
          <Grid item md={7} xs={12} container>
          <Grid
                item
                md={6}
                xs={8}
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
                >
                <Card style={{padding:'25px 50px',borderRadius:'50px 10px'}}>
                  <Typography>Yaaaaa.</Typography>
                </Card>
              </Grid>
              <Grid item md={6} xs={4}>
                <Avatar
                  alt="Conchi"
                  src={Conchi}
                  className="avatar"
                ></Avatar>
              </Grid>
             
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
