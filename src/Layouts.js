import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";

export default function App() {
  //   const [scrollableModal, setScrollableModal] = useState(false);
  const [varyingModal, setVaryingModal] = useState(false);
  const [varyingImage, setVaryingImage] = useState("");

  const onChangeRecipient = (event: any) => {
    setVaryingRecipient(event.target.value);
  };

  const onChangeMessage = (event: any) => {
    setVaryingMessage(event.target.value);
  };

  return (
    <>
      <MDBBtn
              className="m-2"
              color="link"
        style={{ height: "300px", width: "300px", overflow: "hidden" }}
        onClick={() => {
            setVaryingModal(!varyingModal);
            setVaryingImage("l1.png");
        }}
        >
        <img src="l1.png" className="img-fluid" alt="" />
        </MDBBtn>
          <MDBBtn
              color="link"
        className="m-2"
        style={{ height: "300px", width: "300px", overflow: "hidden" }}
        onClick={() => {
            setVaryingImage("l2.png");
            setVaryingModal(!varyingModal);
        }}
        >
        <img src="l2.png" className="img-fluid" alt="" />
        
      </MDBBtn>

      <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex="-1">
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setVaryingModal(!varyingModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {varyingModal && (
                <img src={varyingImage} className="img-fluid" alt="" />
              )}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() => setVaryingModal(!varyingModal)}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}