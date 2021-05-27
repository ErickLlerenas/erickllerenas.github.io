import React  from "react";
import { Fragment } from "react";
import Contact from "./components/Contact";
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
      <Contact/>
    </Fragment>
  );
}
