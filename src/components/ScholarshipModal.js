import { Modal, Button } from "react-bootstrap";

export const ScholarshipModal = ({ show, handleClose, img }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Scholarship Certificate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={img} alt="Scholarship Certificate" style={{ width: "100%" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
