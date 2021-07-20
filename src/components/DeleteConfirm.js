import React from 'react';
import { Modal, Button } from "react-bootstrap";
import DeleteButton from '../components/DeleteButton'


const DeleteConfirm = ( props ) => {



return (

    <Modal show={props.showModal} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Are you sure?</Modal.Title>
    </Modal.Header>
    <Modal.Body>{`${props.dinosaur.name} will become extinct.`}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Cancel
      </Button>
      <DeleteButton dinosaur = {props.dinosaur} handleDelete = {props.handleDelete} />
    </Modal.Footer>
  </Modal>
    )


}

export default DeleteConfirm

