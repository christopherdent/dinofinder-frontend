import React from 'react';
import DinosaurCard from './DinosaurCard'


///will be responsible for rendering a list of dinosaurs
const DinosaursList = (props) => {

  return (
    <div>
      <div className='row'>
        <DinosaurCard dinosaurs = {props.dinosaurs} />
      </div>
    </div>
  )
}


export default DinosaursList
