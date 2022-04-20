import { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Skills from "./Skills";

const variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export default function About() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
    <MDBContainer
    fluid
    id="about"
    className="bg-light position-relative pt-4"
    >
    <div id="about-bg"></div>
        <h2 className="text-center display-1 text-dark">About</h2>
        <MDBRow>
          <MDBCol>
            <MDBContainer className="text-muted pb-4 ">
              <MDBRow>
                <MDBCol>
                  <div className="w-100 text-center">
                    <img
                      alt="My profile picture"
                      className="img-fluid rounded-9 float-sm-start float-none mx-auto mb-4 me-sm-4 mb-sm-2"
                      src="james.jpg"
                    />
                  </div>
                  <p className="mt-0">
                    My love for technology started in the early 90's, and gaming
                    was the gateway drug. If you havent experienced a first
                    person shooter on a 56k modem, it is hard to appreciate what
                    a marvel the modern day web is.
                  </p>
                  <p>
                    I started learning html and css around 2004 while attending
                    college at Texas A&M Kingsville. Shortly after graduation I
                    was hired in the department of Special Programs where I put
                    some of what I learned into action. My first real gig!
                  </p>
                  {/*<img
                  alt="Me baiting a hook at the peir"
                  className="float-end my-2 ms-4 img-fluid w-50"
                  src="fishing.jpg"
                />*/}
                  <p>
                    In 2010 I was given a larger share of websites to manage,
                    and also run the campus ID card program. An invaluable
                    experience! This position sharpened both my technical and
                    creative abilities.
                  </p>
                  <p>
                    8 years later...the University was in the process of
                    redesigning the website and I was thankfully given the
                    opportunity to join the web team. While mindnumbingly
                    stressfull at times, this was the most valuable experience
                    in many ways.
                  </p>
                  <p>
                    Many sleepless nights, pots of coffee, and failures but I'm
                    always jonesing for more!
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
          <Skills />
          {/*
            <MDBCol lg="3">
            <MDBRow className="flex-lg-column">
            <MDBCol>
            <motion.div
            ref={ref}
            variants={variants}
                initial="hidden"
                animate={controls}
                >
                <img
                  alt=""
                  className="my-2 img-fluid"
                  id="sniggs"
                  src="SNIGGS.png"
                  />
                  </motion.div>
                  </MDBCol>
                  <MDBCol>
                  <img alt="" className="my-2 img-fluid" id="bud" src="bud.png" />
                  </MDBCol>
                  </MDBRow>
                  </MDBCol>
                */}
        </MDBRow>
      </MDBContainer>
    </>
  );
}
