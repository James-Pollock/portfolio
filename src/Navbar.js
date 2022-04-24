import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBIcon,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

const MotionComponent = motion(MDBNavbar);

export default function Navbar(props) {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <>
      <MotionComponent
        variants={props.variants}
        animate={props.animate}
        initial={props.initial}
        className="fixed-top topnav"
        expand="lg"
        dark
      >
        <MDBContainer>
          <MDBNavbarBrand
            href="#"
            style={{
              fontFamily: "'Orbitron',sans-serif",
              color: "rgb(130, 248, 126)",
            }}
          >
            JPWeb.Tech
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavRight(!showNavRight)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavRight}>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#about"
                  onClick={() => setShowNavRight(!showNavRight)}
                >
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#projects"
                  onClick={() => setShowNavRight(!showNavRight)}
                >
                  Projects
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="../public/doc/Resume.pdf"
                >
                  Resume
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#contact"
                  onClick={() => setShowNavRight(!showNavRight)}
                >
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MotionComponent>
    </>
  );
}
