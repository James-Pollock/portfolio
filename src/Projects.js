import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Cards from './Cards'
import Layouts from './Layouts'

export default function Projects() {
  return (
    <MDBContainer id="projects" fluid className="bg-light text-secondary py-5">
      <MDBContainer className="position-relative">
        <h2 className="text-dark text-center display-1">Projects</h2>
        <MDBRow className="rounded text-dark bg-light align-items-center text-md-start text-center">
          <MDBCol md="6">
            <h3>Shopping Cart App</h3>
            <p className="text-muted">
              Single page shopping cart application using React JS, Bootstrap 5,
              and Framer Motion.
            </p>
          </MDBCol>
          <MDBCol md="6" className="p-5">
            <a href="https://react-framer-store.netlify.app">
              <img
                alt=""
                className="img-fluid"
                src="shopping-cart.png"
              />
            </a>
          </MDBCol>
          <div className="w-100 py-5"></div>
          <MDBCol md="6" className="order-md-0 order-1 p-5">
          <a href="https://color-theme.netlify.app">
          <img
                alt=""
                className="img-fluid"
                src="color-theme-app.png"
              />
            </a>
            </MDBCol>
          <MDBCol md="6">
            <h3>Color Theme Sandbox</h3>
            <p className="text-muted">
              This app allows you to mix and match color combinations and test
              them on page elements.
            </p>
          </MDBCol>
        </MDBRow>
          <div className="w-100 py-5"></div>
        <Layouts/>
      </MDBContainer>
    </MDBContainer>
  );
}
