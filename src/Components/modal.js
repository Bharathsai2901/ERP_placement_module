import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
        backdrop="static"
        keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Successful
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Job Added</h4>
        <p>
          Thankyou for hiring our students. We hope this relation will continue for long term and we are 
          very much sure that our students reach your expectations.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-success" onClick={props.onHide} href="/Add-job">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
