import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Skills() {
  return (
    <>
    <MDBCol id="skills" size="12">
    <MDBContainer className="py-4">
    <h2 className="text-center">SKILLS</h2>
    <hr />
    <MDBRow>
            <MDBCol size="6" md="3">
              <h4 className="h3 ">Front-End</h4>
              <ul className="mt-4 small">
                <li>
                  HTML <i class="fab fa-html5"></i>
                </li>
                <li>
                  CSS <i class="fab fa-css3-alt"></i>
                </li>
                <li>
                  SASS <i class="fab fa-sass"></i>
                </li>
                <li>
                  Javascript <i class="fab fa-js"></i>
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
              <ul className="mt-4 small">
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
              <ul className="mt-4 small">
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
              <ul className="mt-4 small">
                <li>Cascade CMS &amp; Clive</li>
                <li>Site Improve</li>
                <li>WebAim</li>
                <li>AXE</li>
                <li>Google Analytics</li>
              </ul>
              </MDBCol>
              </MDBRow>
              </MDBContainer>
        </MDBCol>
    </>
  );
}
