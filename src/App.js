import React  from "react";
import { Fragment } from "react";
import Customers from "./components/Customers";
import Experience from "./components/Experience";

//components
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <Fragment>
      <Header/>
      <Portfolio />
      <Experience/>
      <Customers/>
      <svg style={{display:'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#5fd4ea" fillOpacity="1" d="M0,32L30,64C60,96,120,160,180,154.7C240,149,300,75,360,74.7C420,75,480,149,540,170.7C600,192,660,160,720,138.7C780,117,840,107,900,122.7C960,139,1020,181,1080,208C1140,235,1200,245,1260,234.7C1320,224,1380,192,1410,176L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </Fragment>
  );
}
