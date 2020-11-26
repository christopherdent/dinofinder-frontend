import React from 'react'
import {connect} from 'react-redux'
import {addDinosaur} from '../actions/addDinosaur'

///I'd like this to be a modal if i can figure that out
//you also need an ERA field, so that the dinosaur is added to the right era....
class DinosaurInput extends React.Component {
state = {
  name: '',
  size: '',
  weight: '',
  temporal_range: '',
  year_discovered: '',
  picture_url: '',
  summary: '',
  dino_type_id: ''
}


handleOnChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleOnSubmit = (event) => {
  event.preventDefault()
  this.props.addDinosaur(this.state)

}

  render() {
    return (
      <div>
        <h5>Add a Dinosaur</h5>
        <small>HINT: You can find most of the info below from Wikipedia.</small>
        <form onSubmit={this.handleOnSubmit}>
          <label>Dinosaur Name</label><br />
          <input type='text' name='name' placeholder='Dinosaur Name' value={this.state.name} onChange={this.handleOnChange} /><br />

          <label>Dinosaur Size (in feet)</label><br />
          <input type='number' name='size' placeholder='Dinosaur Size' value={this.state.size} onChange={this.handleOnChange} /><br />

          <label>Dinosaur Weight</label><br />
          <input type='number' name='weight' placeholder='Dinosaur Weight' value={this.state.weight} onChange={this.handleOnChange} /><br />

          <label>Temporal Range (When did it live? Example: 150-140 MYA)</label><br />
          <input type='text' name='temporal_range' placeholder='Temporal Range' value={this.state.temporal_range} onChange={this.handleOnChange} /><br />

          <label>Year Discovered</label><br />
          <input type='number' name='year_discovered' placeholder='Year Discovered' value={this.state.year_discovered} onChange={this.handleOnChange} /><br />

          <label>Picture URL</label><br />
          <input type='url' name='picture_url' placeholder='Paste the URL of a picture of this dinosaur here.' value={this.state.picture_url} onChange={this.handleOnChange} /><br />

          <input type='number' name='dino_type_id' value={this.state.dino_type_id} onChange={this.handleOnChange}/> <br />

          <label id='description'>Fun Fact or Brief Description</label><br />
          <textarea name='summary' id='description' rows="5" cols="80" placeholder='Description' value={this.state.summary} onChange={this.handleOnChange} /><br />



          <input type='submit' value='Add Dinosaur!'/>

        </form>
      </div>
    )
  }
}



export default connect(null, {addDinosaur})(DinosaurInput)
