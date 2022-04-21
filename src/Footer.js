import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function Footer() {
  const [formValue, setFormValue] = useState({
    fname: "test",
    lname: "test",
    email: "test@tes.com",
    message: ""
  });
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MDBContainer
        id="contact"
        fluid
        className="position-relative vh-100 d-flex justify-content-center align-items-center"
      >
        <MDBContainer>
          <form
            name="Portfolio Contact Form"
            method="post"
            className="row g-5 justify-content-center"
          >
            <input
              type="hidden"
              name="form-name"
              value="Portfolio Contact Form"
            />
            <div className="col-md-5 bg-light">
              <h2 className="text-center text-dark display-1">Contact</h2>
              <MDBInput
                value={formValue.fname}
                name="fname"
                onChange={onChange}
                id="fname"
                required
                size="lg"
                className="mb-4"
                label="First Name"
              />
              <MDBInput
                value={formValue.lname}
                name="lname"
                onChange={onChange}
                id="lname"
                required
                size="lg"
                className="mb-4"
                label="Last Name"
              />
              <MDBInput
                value={formValue.email}
                name="email"
                onChange={onChange}
                type="email"
                required
                size="lg"
                id="email"
                className="mb-4"
                label="Email address"
              />
              <MDBTextArea
                value={formValue.message}
                name="message"
                onChange={onChange}
                className="mb-4"
                size="lg"
                id="message"
                rows={4}
                label="Message"
              />
              <div data-netlify-recaptcha="true"></div>
              <MDBBtn
                type="submit"
                value="Submit Message"
                size="lg"
                className="mb-4"
                block
              >
                Send &nbsp;
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
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
