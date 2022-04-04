import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Cards from './Cards'

export default function Projects() {
  return (
    <MDBContainer id="projects" fluid className="bg-light py-5">
      <MDBContainer className="position-relative">
        <h2 className="text-dark text-center">Projects</h2>
        <hr className="bg-dark m-0 p-0" />
        <Cards/>
        <MDBRow className="p-5 mx-0 rounded text-center text-dark bg-light align-items-center">
          <MDBCol md="6" className="p-4">
            <h3>Shopping Cart App</h3>
            <p className="text-muted">
              Shopping cart application using React JS, Bootstrap 5, and Framer
              Motion.
            </p>
          </MDBCol>
          <MDBCol md="6" className="p-4">
            <a href="https://react-framer-store.netlify.app">
              <img
                alt=""
                className="shadow-sm img-fluid"
                src="react-framer-store.png"
              />
            </a>
          </MDBCol>
          <div className="w-100"></div>
          <MDBCol md="6" className="order-md-0 order-1 p-4">
            <a href="https://color-theme.netlify.app">
              <img
                alt=""
                className="shadow-sm img-fluid"
                src="color-theme-app.png"
              />
            </a>
          </MDBCol>
          <MDBCol md="6" className="p-4">
            <h3>Color Theme Sandbox</h3>
            <p>
              This project uses a color pallete API to where users can select a
              base color and
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}
