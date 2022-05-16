import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

export default function Skills() {
  const MotionRow = motion(MDBRow);
  const MotionCol = motion(MDBCol);
  const variants = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.03,
        when: "beforeChildren",
        type: "spring",
        delay: 0,
        stiffness: 200,
        bounce: 300,
      },
    },
  };
  const colVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const skills = [
    ["Front-End", ["HTML", "CSS", "SASS", "Javascript", "Bootstrap", "React"]],
    [
      "Back-End",
      ["Apache Velocity", "Node.js", "Rest API", "Firebase", "Mongo DB"],
    ],
    ["Tools", ["Adobe CC", "VSCode", "Codesandbox", "GitHub", "Netlify"]],
    [
      "Management",
      [
        "Cascade CMS & Clive",
        "Site Improve",
        "WebAim",
        "AXE",
        "Google Analytics",
      ],
    ],
  ];
  return (
    <>
      <MDBContainer fluid id="skills" className="py-5" size="12">
        <MDBContainer className="pb-5">
          <h2 className="text-center display-1">SKILLS</h2>
          <motion.hr
            className="mx-auto"
            animate={{
              width: "100%",
              transition: {
                duration: 1,
              },
            }}
            initial={{ width: 0 }}
          />
          <MotionRow variants={variants} animate="animate" initial="initial">
            {skills &&
              skills.map((x, i) => (
                <MotionCol
                  key={i}
                  variants={colVariants}
                  size="6"
                  md="3"
                >
                  <h3>
                    {x[0]}
                  </h3>
                  <ul className="my-4">
                    {x[1].map((xx, ii) => (
                      <li>{xx}</li>
                    ))}
                  </ul>
                </MotionCol>
              ))}
          </MotionRow>
          <motion.hr
            className="mx-auto"
            animate={{
              width: "100%",
              transition: {
                duration: 1,
              },
            }}
            initial={{ width: 0 }}
          />
        </MDBContainer>
      </MDBContainer>
    </>
  );
}