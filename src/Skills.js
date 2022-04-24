import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Skills() {
  return (
    <>
      <MDBContainer fluid id="skills" className="py-5" size="12">
        <MDBContainer className="pb-5">
          <h2 className="text-center display-1">SKILLS</h2>
          <MDBRow>
            <hr />
            <MDBCol size="6" md="3">
              <h4 className="display-6">Front-End</h4>
              <ul className="my-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>React</li>
              </ul>
            </MDBCol>
            <MDBCol size="6" md="3">
              <h4 className="display-6">Back-End</h4>
              <ul className="mt-4">
                <li>Apache Velocity</li>
                <li>Rest API</li>
                <li>Node.js</li>
                <li>Firebase</li>
                <li>Mongo DB</li>
              </ul>
            </MDBCol>
            <MDBCol size="6" md="3">
              <h4 className="display-6">Tools</h4>
              <ul className="mt-4">
                <li>Adobe CC</li>
                <li>VSCode</li>
                <li>Codesandbox</li>
                <li>GitHub</li>
                <li>Netlify</li>
              </ul>
            </MDBCol>
            <MDBCol size="6" md="3">
              <h4 className="display-6">Management</h4>
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
      </MDBContainer>
    </>
  );
}
