import { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Navbar from "./Navbar";

const navVariants = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: -50
  }
};

const welcomeVariants = {
  visible: {
    opacity: 1,
    y:0,
    transition: {
      delayChildren: .3,
      staggerChildren: .2,
      when:"beforeChildren",
      type:'spring',
      duration:.5,
      delay:.5
    }
  },
  hidden: {
    opacity: 0,
    y:-50
  }
};

const heroNav = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: .1,
      staggerChildren: .2,
      when:"beforeChildren",
      type:'spring',
      stiffness:200,
      bounce:300,
      delay:0
    }
  },
  hidden: {
    opacity: 0,
  }
};

const heroNavLinks = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  }
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
        <div className="title">James</div>
        <div className="title-2">Pollock</div>
      </MDBContainer>

      <MDBContainer
        style={{ height: "100vh" }}
        className="d-flex flex-column justify-content-center"
      >
        <WelcomeMotionRow
          variants={welcomeVariants}
          animate="visible"
          initial="hidden"
          className="align-items-center justify-content-center text-center"
        >
          <MDBCol md="12">
            <h1 style={{ lineHeight: "10px" }}>Welcome</h1>
            <p style={{ fontWeight: "200", letterSpacing: "5px" }}>
              I am a web developer
            </p>
          </MDBCol>
          <MDBCol
            ref={ref}
            md="12"
            variants={heroNav}
            initial="hidden"
            animate="visible"
            className="hero-links"
          >
            <motion.a
              variants={heroNavLinks}
              style={{ color: "#82F87E" }}
              className="p-2"
              href="#about"
            >
              ABOUT
            </motion.a>
            <motion.a
              variants={heroNavLinks}
              style={{ color: "#82F87E" }}
              className="p-2"
              href="#projects"
            >
              PROJECTS
            </motion.a>
            <motion.a
              variants={heroNavLinks}
              style={{ color: "#82F87E" }}
              className="p-2"
              href="#resume"
            >
              RESUME
            </motion.a>
            <motion.a
              variants={heroNavLinks}
              style={{ color: "#82F87E" }}
              className="p-2"
              href="#contact"
            >
              CONTACT
            </motion.a>
          </MDBCol>
        </WelcomeMotionRow>
      </MDBContainer>
    </>
  );
}
