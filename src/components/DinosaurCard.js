import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deleteDinosaur} from '../actions/deleteDinosaur'
import DinosaurEdit from '../components/DinosaurEdit'
import {Link} from 'react-router-dom'
import Button from '../components/Button'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class DinosaurCard extends Component {

  constructor(props) {
    super(props);
    this.state = {

          dinosaur: ''
      };

    }


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

        <DinosaurEdit
          dinoId = {dinosaur.id}
          dinoName = {dinosaur.name}
          dinoSize = {dinosaur.size}
          dinoWeight = {dinosaur.weight}
          dinoRange = {dinosaur.temporal_range}
          dinoYear = {dinosaur.year_discovered}
          dinoPic = {dinosaur.picture_url}
          dinoSummary = {dinosaur.summary}
          dinoTypeId = {dinosaur.dino_type_id}

          />

    <Button dinosaur={dinosaur} handleDelete = {this.handleDelete} />
        </div>)}
      </div>
    )}
  }


export default connect(null, {deleteDinosaur})(DinosaurCard)
