import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Hero />
      <div className="container-fluid m-0 p-0" style={{ overflowX: "hidden" }}>
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
