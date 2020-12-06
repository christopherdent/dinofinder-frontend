import React from 'react';


//only used for dinosaurs here but could potentially be used on components for eras or dino_types in the future if more were to be added.  
const Button = (props) => {

  return (
      <div>
        <button className="btn btn-danger" onClick={() => props.handleDelete(props.dinosaur)}>Delete Dino</button>
      </div>
    )
  }

export default Button
