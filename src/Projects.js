import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Projects() {
  return (
    <MDBContainer id="projects" fluid className="bg-light text-secondary py-5">
      <MDBContainer className="position-relative d-flex flex-column text-dark bg-light align-items-center text-center">
        <h2 className="text-dark text-center display-1">Projects</h2>
        <MDBRow className="align-items-center my-5">
          <MDBCol md="6" className="px-3">
            <h3>Shopping Cart App</h3>
            <p className="text-muted">
              Single page shopping cart application using React JS, Bootstrap 5,
              and Framer Motion.
            </p>
          </MDBCol>
          <MDBCol md="6" className="py-5">
            <a href="https://react-framer-store.netlify.app">
              <img alt="" className="img-fluid" src="shopping-cart.png" />
            </a>
          </MDBCol>
        </MDBRow>
        <MDBRow className="align-items-center my-5">
          <MDBCol md="6" className="py-5 order-md-0 order-1">
            <a href="https://color-theme.netlify.app">
              <img alt="" className="img-fluid" src="color-theme-app.png" />
            </a>
          </MDBCol>
          <MDBCol md="6" className="px-3">
            <h3>Color Theme Sandbox</h3>
            <p className="text-muted">
              This app allows you to mix and match color combinations and test
              them on page elements.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="align-items-center my-5">
          <MDBCol md="6" className="px-3">
            <h3>Marketing Material</h3>
            <p className="text-muted">
              Various projects I have worked on for advertisements.
            </p>
          </MDBCol>
          <MDBCol md="6" className="py-5">
            <a href="/edu/TAMUK-collage.jpg">
              <img alt="" className="img-fluid" src="/edu/TAMUK-collage.jpg" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}
