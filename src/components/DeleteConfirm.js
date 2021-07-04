import React from 'react';
import { Modal, Button } from "react-bootstrap";
import DeleteButton from '../components/DeleteButton'


const DeleteConfirm = ({ showModal, hideModal, confirmModal, dinosaur, message }) => {

return (

<Modal show={showModal} onHide={hideModal}>
    <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
    </Modal.Header>
    
    <Modal.Body>
        <div className="alert alert-danger">{message}</div>
    </Modal.Body>
    
    <Modal.Footer>
      <Button variant="default" onClick={hideModal}>
        Cancel
      </Button>
      <Button variant="danger" onClick={() => confirmModal(dinosaur) }>
        Delete
      </Button>


    </Modal.Footer>
</Modal>
    )
 }

export default DeleteConfirm

