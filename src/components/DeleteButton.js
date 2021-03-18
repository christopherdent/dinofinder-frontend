import React from 'react';
// import Button from 'react-bootstrap/Button';

//only used for dinosaurs here but could potentially be used on components for eras or dino_types in the future if more were to be added.
const DeleteButton = (props) => {

  return (

      <div>

        <button className="btn btn-danger" onClick={() => props.handleDelete(props.dinosaur)}>Delete {props.name}</button>
      </div>
    )
  }

export default DeleteButton
