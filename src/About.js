import { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const ContainerMotion = motion(MDBContainer);

export default function About() {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  
  const AboutVariants = {
    initial: {
      opacity: 0,
      scale: 0.7,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        bounce: 30,
        staggerChildren: 0.03,
        delayChildren: 0.03,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      scale: .7,
    },
  };
  const HeadshotVariants = {
    initial: {
      opacity:0,
    },
    animate: {
      opacity:1,
    },
    exit: {
      opacity: 0,
    },
  };

  const FadeVariants = {
    initial: {
      opacity: 0,
      y:50
    },
    animate: {
      opacity: 1,
      y:0
    },
    exit: {
      opacity: 0,
      y:50
    },

  }

  
  useEffect(() => {
    if (!inView) {
      controls.start("initial");
    } else {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <>
      <MDBContainer fluid id="about" className="py-5 position-relative">
        <MDBRow>
          <MDBCol>
            <ContainerMotion
              ref={ref}
              variants={AboutVariants}
              animate={controls}
              initial="initial"
              exit="exit"
              className="text-muted pb-4 "
            >
              <MDBRow>
              <MDBCol>
              <div className="w-100 text-center">
                    <motion.h2
                      variants={FadeVariants}
                      className="text-center display-1 text-dark"
                    >
                      About
                    </motion.h2>
                    <motion.img
                    variants={HeadshotVariants}
                    alt="My profile picture"
                    className="img-fluid  img-thumbnail shadow float-sm-start float-none mx-auto mb-4 me-sm-4 mb-sm-2"
                    src="james.jpg"
                    />
                    </div>
                    <motion.p variants={FadeVariants} className="mt-0">
                    <span
                    className="h1"
                    style={{
                        color: "#82F87E",
                      }}
                    >
                      M
                    </span>
                    y love for technology started in the early 90's, and gaming
                    was the gateway drug. If you havent experienced a first
                    person shooter on a 56k modem, it is hard to appreciate what
                    a marvel the modern day web is.
                    </motion.p>
                    <motion.p variants={FadeVariants}>
                    I started learning html and css around 2004 while attending
                    college at Texas A&M Kingsville. Shortly after graduation I
                    was hired in the department of Special Programs where I put
                    some of what I learned into action. My first real gig!
                  </motion.p>
                  {/*<img
                  alt="Me baiting a hook at the peir"
                  className="float-end my-2 ms-4 img-fluid w-50"
                  src="fishing.jpg"
                />*/}
                  <motion.p variants={FadeVariants}>
                    In 2010 I was given a larger share of websites to manage,
                    and also run the campus ID card program. An invaluable
                    experience! This position sharpened both my technical and
                    creative abilities.
                    </motion.p>
                  <motion.p variants={FadeVariants}>
                    8 years later...the University was in the process of
                    redesigning the website and I was thankfully given the
                    opportunity to join the web team. While mindnumbingly
                    stressfull at times, this was the most valuable experience
                    in many ways.
                  </motion.p>
                  <motion.p variants={FadeVariants}>
                  Many sleepless nights, pots of coffee, and failures but I'm
                  always jonesing for more!
                  </motion.p>
                </MDBCol>
              </MDBRow>
            </ContainerMotion>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
