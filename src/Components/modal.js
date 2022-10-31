import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/modal.css"

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
        backdrop="static"
        keyboard={false}
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Successful
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
      <h2 className="modalbody"> <img src="https://www.formpl.us/static/images/form/checkmark.svg" alt="" /><br />{props.text}</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-success" onClick={props.onHide} href={props.href}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}