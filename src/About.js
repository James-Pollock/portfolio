import { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const variants = {
  visible: {
    transform: "skew(0deg, 0deg)",
    scale: 1,
    height: "100%",
    transition: {
      type: "spring",
      stiffness: 200,
      duration: 1
    }
  },
  hidden: {
    // transform: "skew(-15deg, -15deg)",
    height: "3px"
    // scale:.5
  }
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
    <MDBContainer id="about" className="py-5 my-5 position-relative">
      <h2 className="text-center">About James Pollock</h2>
      <hr />
      <MDBRow className="text-light">
        <MDBCol lg="9">
          <MDBRow>
            <MDBCol>
              <div className="w-100 text-center">
                <img
                  alt=""
                  className="img-fluid float-sm-start mx-auto me-4 mb-3"
                  src="james.jpg"
                />
              </div>
              <p className="mt-0">
                Column breaks Breaking columns to a new line in flexbox requires
                a small hack: add an element with width: 100% wherever you want
                to wrap your columns to a new line. Normally this is
                accomplished with multiple s, but not every implementation
                method can account for this.
              </p>
              <p>
                Column breaks Breaking columns to a new line in flexbox requires
                a small hack: add an element with width: 100% wherever you want
                to wrap your columns to a new line. Normally this is
                accomplished with multiple s, but not every implementation
                method can account for this.
              </p>
              <img
                alt=""
                className="float-end my-2 ms-4 img-fluid w-50"
                src="fishing.jpg"
              />
              <p>
                Column breaks Breaking columns to a new line in flexbox requires
                a small hack: add an element with width: 100% wherever you want
                to wrap your columns to a new line. Normally this is
                accomplished with multiple s, but not every implementation
                method can account for this.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
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
      </MDBRow>
    </MDBContainer>
  );
}
