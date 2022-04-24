import { useState, useEffect } from "react";
import {
  MDBTypography,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Navbar from "./Navbar";

const navVariants = {
  visible: {
    opacity: 1,
    y: 0,
    display: "initial",
  },
  hidden: {
    opacity: 0,
    y: 0,
    display: "none",
    transition: {
      duration: 0.3,
    },
  },
};

const welcomeVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.01,
      staggerChildren: 0.1,
      when: "beforeChildren",
      type: "spring",
      duration: 1,
      delay: 1,
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
      delayChildren: 0.03,
      staggerChildren: 0.03,
      when: "beforeChildren",
      type: "spring",
      stiffness: 200,
      bounce: 300,
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
const HeroBtn = motion(MDBBtn);

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

  const textShadowColor = "#9B9EA1";

  return (
    <>
      <Navbar variants={navVariants} animate={controls} initial="hidden" />
      <section id="hero-wrapper">
        <MDBContainer
          id="hero"
          className="d-flex justify-content-center align-items-center"
          fluid
        >
          <WelcomeMotionRow
            variants={welcomeVariants}
            animate="visible"
            initial="hidden"
            className="w-100 align-items-center justify-content-center"
          >
            <MDBCol size="12" lg="6">
              <motion.h1
                id="james"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  color: "rgb(81 97 119)",
                  textShadow: `1px 1px 1px #ffffff,
                  1px 2px ${textShadowColor},
                  1px 3px ${textShadowColor},
                  1px 4px ${textShadowColor},
                  1px 5px ${textShadowColor},
                  1px 6px ${textShadowColor},
                  1px 7px ${textShadowColor},
                  1px 8px ${textShadowColor},
                  1px 9px ${textShadowColor},
                  1px 10px ${textShadowColor},
                  1px 11px ${textShadowColor},
                  1px 12px ${textShadowColor},
                  1px 13px ${textShadowColor},
                  1px 14px ${textShadowColor},
                  1px 15px ${textShadowColor},
                  1px 16px ${textShadowColor},
                  1px 17px ${textShadowColor},
                  -5px 10px 10px #666`,
                }}
              >
                JP Pollock
              </motion.h1>
              <MDBTypography tag="h2" variant="display-6">
                Front End Web Designer
              </MDBTypography>
            </MDBCol>
            <MDBCol
              size="12"
              lg="6"
              ref={ref}
              variants={heroNav}
              initial="hidden"
              animate="visible"
              className="hero-links"
            >
              <div className="d-md-block d-grid gap-0 col-md-12 col-11 mx-auto">
                <HeroBtn
                  color="white"
                  className="m-2"
                  variants={heroNavLinks}
                  href="#about"
                >
                  About
                </HeroBtn>
                <HeroBtn
                  color="white"
                  className="m-2"
                  variants={heroNavLinks}
                  href="#projects"
                >
                  Projects
                </HeroBtn>
                <HeroBtn
                  color="white"
                  className="m-2"
                  variants={heroNavLinks}
                  href="../doc/Resume.pdf"
                >
                  Resume
                </HeroBtn>
                <HeroBtn
                  color="white"
                  className="m-2"
                  variants={heroNavLinks}
                  href="#contact"
                >
                  Contact
                </HeroBtn>
                </div>
                </MDBCol>
                </WelcomeMotionRow>
                </MDBContainer>
      </section>
    </>
  );
}
