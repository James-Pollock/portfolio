import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./css/styles.min.css";


import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";
import About from "./About";

export default function App() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Footer />
    </>
  );
}
