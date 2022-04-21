import { useEffect } from "react";
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
  },
  hidden: {
    opacity: 0,
    y: -150,
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

  return (
    <>
      <Navbar variants={navVariants} animate={controls} initial="hidden" />
      <MDBContainer
        id="hero"
        className="d-flex position-relative flex-column justify-content-center"
        fluid
      >
        <WelcomeMotionRow
          variants={welcomeVariants}
          animate="visible"
          initial="hidden"
          className="align-items-center justify-content-center text-center"
          id="hero-wrapper"
        >
          <MDBCol>
            <MDBRow className="justify-content-center align-items-center">
              <MDBCol size="12" lg="6" className="mb-4">
                <MDBTypography tag="h1">JP Pollock</MDBTypography>

                <MDBTypography tag="p" variant="display-4">
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
                <div className="d-md-block d-grid gap-0 col-md-12 col-7 mx-auto">
                  <HeroBtn
                    color="white"
                    className="rounded-0 m-2"
                    variants={heroNavLinks}
                    href="#about"
                  >
                    About
                  </HeroBtn>
                  <HeroBtn
                    color="white"
                    className="rounded-0 m-2"
                    variants={heroNavLinks}
                    href="#projects"
                  >
                    Projects
                  </HeroBtn>
                  <HeroBtn
                    color="white"
                    className="rounded-0 m-2"
                    variants={heroNavLinks}
                    href="#resume"
                  >
                    Resume
                  </HeroBtn>
                  <HeroBtn
                    color="white"
                    className="rounded-0 m-2"
                    variants={heroNavLinks}
                    href="#contact"
                  >
                    Contact
                  </HeroBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </WelcomeMotionRow>
      </MDBContainer>
    </>
  );
}
