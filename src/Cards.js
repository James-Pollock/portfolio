import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBRow className="text-light justify-content-center row-cols-1 row-cols-md-3 ">
      <MDBCol>
        <MDBCard className="text-dark">
          <MDBCardImage src="shopping-cart.png" position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle className="h3 pb-0 mb-0">
              Shopping Cart App
            </MDBCardTitle>
            <MDBCardText className="my-4">
              Single page shopping cart application using React JS, Bootstrap 5, and Framer
              Motion.
            </MDBCardText>
            <MDBBtn className="btn-block" color="dark text-light" href="#">
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="text-dark">
          <MDBCardImage src="color-theme-app.png" position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle className="h3 pb-0 mb-0">
              Color Theme Sandbox
            </MDBCardTitle>
            <MDBCardText className="my-4">
              This app allows you to mix and match color combinations and test them on page elements.
            </MDBCardText>
            <MDBBtn className="btn-block" color="dark text-light" href="#">
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>
  );
}
