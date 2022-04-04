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
    <MDBRow className="text-light row-cols-1 row-cols-md-3 g-5">
      <MDBCol>
        <MDBCard style={{background:'#EAEAEA'}} className="text-dark">
          <MDBCardImage src="shopping-cart.png" position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle className="h3 pb-0 mb-0">Shopping Cart App</MDBCardTitle>
            <MDBCardText className="my-4">
              Shopping cart application using React JS, Bootstrap 5, and Framer
              Motion.
            </MDBCardText>
            <MDBBtn className="btn-block" color="dark text-light" href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard style={{background:'#EAEAEA'}} className="text-dark">
          <MDBCardImage src="color-theme-app.png" position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle className="h3 pb-0 mb-0">Shopping Cart App</MDBCardTitle>
            <MDBCardText className="my-4">
              Shopping cart application using React JS, Bootstrap 5, and Framer
              Motion.
            </MDBCardText>
            <MDBBtn className="btn-block" color="dark text-light" href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard style={{background:'#EAEAEA'}} className="text-dark">
          <MDBCardImage src="administration-page.png" position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle className="h3 pb-0 mb-0">Shopping Cart App</MDBCardTitle>
            <MDBCardText className="my-4">
              Shopping cart application using React JS, Bootstrap 5, and Framer
              Motion.
            </MDBCardText>
            <MDBBtn className="btn-block" color="dark text-light" href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
