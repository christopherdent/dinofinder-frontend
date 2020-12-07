import React, {Component} from 'react';
import DinosaurEdit from '../components/DinosaurEdit'
import Button from '../components/Button'

const DinosaurCard = (props) => {

  return (
  <div className="card card-inverse card-success card-primary mb-3 text-center">
     <div className="card-block">
       <img src = {props.pictureUrl} alt = 'Artist impression of {dinosaur.name}' />
     <p>{props.name} --- {props.id}</p>
     <p>Size: {props.size} feet </p>
     <p>Weight: {props.weight} pounds </p>
     <p>Year Discovered:  {props.yearDiscovered}</p>
     <p>Years Lived: {props.temporalRange}</p>
     <p>{props.summary}</p>
      <center>  <Button dinosaur={props.dinosaur} handleDelete = {props.handleDelete} /> </center>
     </div>
  </div>
)

}

export default DinosaurCard
