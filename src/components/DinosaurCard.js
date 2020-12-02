import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deleteDinosaur} from '../actions/deleteDinosaur'



class DinosaurCard extends Component {



  handleDelete = (dinosaur) => {
    this.props.deleteDinosaur(dinosaur.id, dinosaur.dino_type.id, dinosaur.dino_type.era_id)
  }

render() {
  return (
   <div>
      {this.props.dinosaurs.map(dinosaur =>
        <div
        key={dinosaur.id}
        className='card w-75'>

        <img src = {dinosaur.picture_url} />
        <p>{dinosaur.name}</p>
        <p>Size: {dinosaur.size} feet </p>
        <p>Weight: {dinosaur.weight} pounds </p>
        <p>Year Discovered:  {dinosaur.year_discovered}</p>
        <p>Years Lived: {dinosaur.temporal_range}</p>
        <p>{dinosaur.summary}</p>

          <button className="btn btn-warning">Edit Dino</button>
          <button className="btn btn-danger" onClick={() => this.handleDelete(dinosaur)}>Delete Dino</button>
        </div>)}
      </div>
    )}
  }


export default connect(null, {deleteDinosaur})(DinosaurCard)
