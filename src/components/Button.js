import React from 'react';
import DinosaurCard from './DinosaurCard'



///will be responsible for rendering dinosaur cards
const Button = (props) => {

  return (
      <div>
        <button className="btn btn-danger" onClick={() => props.handleDelete(props.dinosaur)}>Delete Dino</button>
      </div>
    )
  }

export default Button
