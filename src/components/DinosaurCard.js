import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deleteDinosaur} from '../actions/deleteDinosaur'
import DinosaurEdit from '../components/DinosaurEdit'
import Button from '../components/Button'

class DinosaurCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
        showHide: false,
        dinosaur: ''
      };
      this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
      if (name === 'showHide') {
        this.setState({ showHide: !this.state.showHide });
      }
    }

  handleDelete = (dinosaur) => {
    this.props.deleteDinosaur(dinosaur.id, dinosaur.dino_type.id, dinosaur.dino_type.era_id)
  }



render() {

     const { showHide } = this.state;

  return (
   <div>

      {this.props.dinosaurs.map(dinosaur =>
        <div
        key={dinosaur.id}
        className='card w-75'>

        <img src = {dinosaur.picture_url} alt = 'Artist impression of {dinosaur.name}' />
        <p>{dinosaur.name}</p>
        <p>Size: {dinosaur.size} feet </p>
        <p>Weight: {dinosaur.weight} pounds </p>
        <p>Year Discovered:  {dinosaur.year_discovered}</p>
        <p>Years Lived: {dinosaur.temporal_range}</p>
        <p>{dinosaur.summary}</p>

  <div className="text-center">
    <button type="button" className="btn btn-primary" onClick={() => this.hideComponent("showHide")}>
      {showHide === false ? "Edit Dinosaur" : "Hide Form" }
    </button>
  </div>
    <div> {showHide && <DinosaurEdit
              dinoId = {dinosaur.id}
              dinoName = {dinosaur.name}
              dinoSize = {dinosaur.size}
              dinoWeight = {dinosaur.weight}
              dinoRange = {dinosaur.temporal_range}
              dinoYear = {dinosaur.year_discovered}
              dinoPic = {dinosaur.picture_url}
              dinoSummary = {dinosaur.summary}
              dinoTypeId = {dinosaur.dino_type_id}

              />} <hr /></div>
    <Button dinosaur={dinosaur} handleDelete = {this.handleDelete} />
        </div>)}
      </div>
    )}
  }


export default connect(null, {deleteDinosaur})(DinosaurCard)
