import React from 'react';
import DinosaurCard from './DinosaurCard'
import DinosaurInput from '../components/DinosaurInput'


///will be responsible for rendering dinosaur cards
const DinosaursList = (props) => {

// <div className="d-flex mt-5 justify-content-center">
  return (
    <div>
     <div className="row">
       <div className="col-md-4">
        <DinosaurCard dinosaurs = {props.dinosaurs} />
      </div>
  </div>
</div>

  )
}


export default DinosaursList
