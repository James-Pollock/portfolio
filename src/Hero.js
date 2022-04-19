import { useEffect } from "react";
import { MDBTypography, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Navbar from "./Navbar";

const navVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -50,
  },
};

const welcomeVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      when: "beforeChildren",
      type: "spring",
      duration: 0.5,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: -50,
  },
};

const heroNav = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
      when: "beforeChildren",
      type: "spring",
      stiffness: 200,
      bounce: 300,
      delay: 0,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const heroNavLinks = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const WelcomeMotionRow = motion(MDBRow);

export default function Hero() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (!inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <Navbar variants={navVariants} animate={controls} initial="hidden" />

      <MDBContainer fluid>
        <div className="title">Pollock</div>
        <div className="title-2">James</div>
      </MDBContainer>

      <MDBContainer
        id="hero"
        className="d-flex flex-column justify-content-center"
        fluid
      >
        <WelcomeMotionRow
          variants={welcomeVariants}
          animate="visible"
          initial="hidden"
          className="align-items-center justify-content-center text-center"
          id="hero-wrapper"
        >
          <MDBCol md="12 mb-4">
            <MDBTypography variant="display-1" style={{ lineHeight: "10px" }}>
              Howdy
            </MDBTypography>
            <MDBTypography variant="h4">
              I'm James and front end web developer
            </MDBTypography>
          </MDBCol>
          <MDBCol
            ref={ref}
            md="12"
            variants={heroNav}
            initial="hidden"
            animate="visible"
            className="hero-links"
          >
            <motion.a variants={heroNavLinks} href="#about">
              About
            </motion.a>
            <motion.a variants={heroNavLinks} href="#projects">
              Projects
            </motion.a>
            <motion.a variants={heroNavLinks} href="#resume">
              Resume
            </motion.a>
            <motion.a variants={heroNavLinks} href="#contact">
              Contact
            </motion.a>
          </MDBCol>
        </WelcomeMotionRow>
      </MDBContainer>
    </>
  );
}
