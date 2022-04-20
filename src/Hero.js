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
          <MDBCol>
            <MDBRow className="justify-content-center align-items-center">
              <MDBCol size="12" lg="6" className="mb-4">
                <MDBTypography
                  style={{
                    fontSize: "5rem",
                    fontWeight: "bold",
                    lineHeight: "5rem",
                    margin: "4px 0px",
                    padding: "4px 0px",
                  }}
                >
                  I'm James
                </MDBTypography>
                <MDBTypography
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "300",
                    lineHeight: "5rem",
                    margin: "4px 0px",
                    padding: "4px 0px",
                  }}
                >
                  A Front End Web Designer
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
                <div class="d-grid gap-4 d-sm-block mx-auto">
                  <HeroBtn
                    color="light"
                    className="rounded-0 mx-2"
                    variants={heroNavLinks}
                    href="#about"
                  >
                    About
                  </HeroBtn>
                  <HeroBtn
                    color="light"
                    className="rounded-0 mx-2"
                    variants={heroNavLinks}
                    href="#projects"
                  >
                    Projects
                  </HeroBtn>
                  <HeroBtn
                    color="light"
                    className="rounded-0 mx-2"
                    variants={heroNavLinks}
                    href="#resume"
                  >
                    Resume
                  </HeroBtn>
                  <HeroBtn
                    color="light"
                    className="rounded-0 mx-2"
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
