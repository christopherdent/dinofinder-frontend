import React from 'react';
import { Modal, Button } from "react-bootstrap";
 
const DeleteConfirm = ({ showModal, hideModal, confirmModal, id, type, message }) => {

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
      <Button variant="danger" onClick={() => confirmModal(type, id) }>
        Delete
      </Button>
    </Modal.Footer>
</Modal>
    )
 }

export default DeleteConfirm


// function Popup({ handleDeleteTrue }) {
//     return (
//       <div className="modal">
//         <div className="modal_box">
//           <p>You sure you wanna delete?</p>
//           <button className="modal_buttonCancel">Cancel</button>
//           <button onClick={handleDeleteTrue} className="modal_buttoDelete">
//             Confirm
//           </button>
//         </div>
//       </div>
//     );
//   }
  
//   export default Popup;