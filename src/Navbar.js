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
  MDBIcon
} from "mdb-react-ui-kit";

const MotionComponent = motion(MDBNavbar);

export default function Navbar(props) {
  const [showNavLeft, setShowNavLeft] = useState(false);

  return (
    <>
      <MotionComponent
        variants={props.variants}
        animate={props.animate}
        initial={props.initial}
        className="topnav"
        expand="lg"
        dark
        sticky
      >
        <MDBContainer>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavLeft(!showNavLeft)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavLeft}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink href="#projects">Projects</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#about">About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Resume</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#contact">Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MotionComponent>
    </>
  );
}
