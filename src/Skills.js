import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Skills() {
  return (
    <>
      <MDBCol id="skills" size="12">
        <MDBContainer className="pb-5">
          <h2 className="text-center display-1">SKILLS</h2>
          <MDBRow>
            <hr />
            <MDBCol size="6" md="3">
              <h4 className="h3">Front-End</h4>
              <ul className="my-4">
                <li>
                  HTML <i className="fab fa-html5"></i>
                </li>
                <li>
                  CSS <i className="fab fa-css3-alt"></i>
                </li>
                <li>
                  SASS <i className="fab fa-sass"></i>
                </li>
                <li>
                  Javascript <i className="fab fa-js"></i>
                </li>
                <li>Bootstrap</li>
                <li>Jquery</li>
                <li>React</li>
                <li>Material UI</li>
                <li>Framer Motion</li>
                <li>GSAP</li>
                <li>Vuejs</li>
              </ul>
            </MDBCol>
            <MDBCol size="6" md="3">
              <h4 className="h3 ">Back-End</h4>
              <ul className="mt-4">
                <li>Velocity MVC Template Engine</li>
                <li>Rest API</li>
                <li>JSON</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Firebase</li>
                <li>Mongo DB</li>
              </ul>
            </MDBCol>
            <MDBCol size="6" md="3">
              <h4 className="h3 ">Applications</h4>
              <ul className="mt-4">
                <li>Adobe Photoshop</li>
                <li>Illustrator</li>
                <li>InDesign</li>
                <li>VSCode</li>
                <li>Codesandbox</li>
                <li>Git &amp; GitHub</li>
                <li>Netlify</li>
              </ul>
            </MDBCol>
            <MDBCol size="6" md="3">
              <h4 className="h3 ">CMS and ADA Tools</h4>
              <ul className="mt-4">
                <li>Cascade CMS &amp; Clive</li>
                <li>Site Improve</li>
                <li>WebAim</li>
                <li>AXE</li>
                <li>Google Analytics</li>
              </ul>
            </MDBCol>
            <hr />
          </MDBRow>
        </MDBContainer>
      </MDBCol>
    </>
  );
}
