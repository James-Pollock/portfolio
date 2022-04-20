import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
export default function Footer() {
  return (
    <>
      <MDBContainer
        id="contact"
        fluid
        className="position-relative d-flex justify-content-center align-items-center"
      >
        {
          // <div className="title">Pollock</div>
          // <div className="title-2">James</div>
          
      }  
      
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol
              lg="7"
              sm="12"
              className="d-flex p-4 border-5 rounded flex-column"
            >
              <h2 className="text-center">Contact</h2>
              <label name="name">Names</label>
              <input type="text" />
              <label name="email">Email</label>
              <input type="text" />
              <label name="phone">Phone</label>
              <input type="text" />
              <label name="comments">Comments</label>
              <textarea type="text" />
              <div className="text-center mt-4">
                <MDBBtn color="light" type="submit">
                  Send &nbsp;
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBBtn
          tag="a"
          href="#"
          className="me-2 position-absolute rounded-0"
          color="dark"
          style={{ bottom: "0", right: "2rem" }}
        >
          <MDBIcon icon="angle-up" size="lg" className="ml-2" />
        </MDBBtn>
      </MDBContainer>
    </>
  );
}
