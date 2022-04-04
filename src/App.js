import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./css/styles.min.scss";


import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";

export default function App() {
  return (
    <>
      <Hero />
      <Projects/>
      <About />
      <Footer />
    </>
  );
}
