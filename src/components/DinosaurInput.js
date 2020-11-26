import React from 'react'
///I'd like this to be a modal if i can figure that out 
class DinosaurInput extends React.Component {


  render() {
    return (
      <div>
        <h5>Add a Dinosaur</h5>
        <small>HINT: You can find most of the info below from Wikipedia.</small>
        <form>
          <label>Dinosaur Name</label><br />
          <input type='text' placeholder='Dinosaur Name' /><br />
          <label>Dinosaur Size (in feet)</label><br />
          <input type='number' placeholder='Dinosaur Size' /><br />
          <label>Dinosaur Weight</label><br />
          <input type='number' placeholder='Dinosaur Weight' /><br />
          <label>Temporal Range (When did it live? Example: 150-140 MYA)</label><br />
          <input type='text' placeholder='Temporal Range' /><br />
          <label>Year Discovered</label><br />
          <input type='number' placeholder='Year Discovered' /><br />
          <label>Picture URL</label><br />
          <input type='url' placeholder='Paste the URL of a picture of this dinosaur here.' /><br />
          <label>Fun Fact or Brief Description</label><br />
          <textarea rows="5" cols="80" placeholder='Description' /><br />
          <input type='submit' value='Add Dinosaur!'/>
        </form>
      </div>
    )
  }
}

export default DinosaurInput
