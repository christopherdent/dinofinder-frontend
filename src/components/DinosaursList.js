import React from 'react';
import DinosaurCard from './DinosaurCard'
import DinosaurInput from '../components/DinosaurInput'

///will be responsible for rendering dinosaur cards
const DinosaursList = (props) => {



  return (
    <div>

      <div className="d-flex mt-5 justify-content-center">
        <DinosaurCard dinosaurs = {props.dinosaurs} />
      </div>
    </div>
  )
}


export default DinosaursList
