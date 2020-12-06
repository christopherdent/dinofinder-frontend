import React from 'react'
import {connect} from 'react-redux'
import {editDinosaur} from '../actions/editDinosaur'


class DinosaurEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      id: this.props.dinoId,
      name: this.props.dinoName,
      size: this.props.dinoSize,
      weight: this.props.dinoWeight,
      temporal_range: this.props.dinoRange,
      year_discovered: this.props.dinoYear,
      picture_url: this.props.dinoPic,
      summary: this.props.dinoSummary,
      dino_type_id: this.props.dinoTypeId
      }
    }

    // componentDidMount(){
    //    this.setState(
    //      {
    //        id: this.props.dinoId,
    //        name: this.props.dinoName,
    //        size: this.props.dinoSize,
    //        weight: this.props.dinoWeight,
    //        temporal_range: this.props.dinoRange,
    //        year_discovered: this.props.dinoYear,
    //        picture_url: this.props.dinoPic,
    //        summary: this.props.dinoSummary,
    //        dino_type_id: this.props.dinoTypeId
    //        }
    //    )
    // }



handleOnChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleOnSubmit = (event) => {
  event.preventDefault()
  let dinosaur = {...this.state, id: this.state.id}
  this.props.editDinosaur(dinosaur)
  this.setState(
    { id: '',
      name: '',
      size: '',
      weight: '',
      temporal_range: '',
      year_discovered: '',
      picture_url: '',
      summary: '',
      dino_type_id: ''
    }
  )
}

  render() {

    return (
      <div>
        <h5>Edit {this.props.dinosaurName} </h5>
        <small>HINT: You can find most of the info below from <a href="https://en.wikipedia.org/wiki/Dinosaur">Wikipedia</a> or <a href="https://dinopedia.fandom.com/">DinoPedia</a></small>
        <br /> <br />
        <form onSubmit={this.handleOnSubmit}>
          <small>

          <label>Category: When did it live and what kind of dinosaur was it? </label><br />
          <p>Triassic Period: 251.902–201.3 million years ago</p>
            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="1" onChange={this.handleOnChange} />
              <label>Triassic Herbivore</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="2" onChange={this.handleOnChange} />
              <label>Triassic Carnivore</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="3" onChange={this.handleOnChange} />
              <label>Triassic Avian</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="4" onChange={this.handleOnChange} />
              <label>  Triassic Marine</label><br />
            </div>
            <br /><br />
            <p>Jurassic Period:  201.3–145 million years ago</p>
            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="5" onChange={this.handleOnChange} />
              <label>  Jurassic Herbivore</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="6" onChange={this.handleOnChange} />
              <label>  Jurassic Carnivore</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="7" onChange={this.handleOnChange} />
              <label>  Jurassic Avian</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="8" onChange={this.handleOnChange} />
              <label>Jurassic Marine</label> <br />
            </div>
            <br /><br />
            <p>Cretaceous Period: 145–66 million years ago</p>
            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="9" onChange={this.handleOnChange} />
              <label>Cretaceous Herbivore</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="10" onChange={this.handleOnChange} />
              <label>Cretaceous Carnivore</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="11" onChange={this.handleOnChange} />
              <label>Cretaceous Avian</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name="dino_type_id" value="12" onChange={this.handleOnChange} />
              <label>Cretaceous Marine</label> <br />
            </div>
            <br /> <br />


      <div className="form-row align-items-center">
        <div className="col-auto">
          <label>Dinosaur Name</label><br />
          <input type='text' name='name' placeholder='Dinosaur Name' value={this.state.name} onChange={this.handleOnChange} /><br />
        </div>

          <div className="col-auto">
          <label>Dinosaur Size (in feet)</label><br />
          <input type='number' name='size' placeholder='Dinosaur Size' value={this.state.size} onChange={this.handleOnChange} />
        </div>
        <div className="col-auto">
          <label>Dinosaur Weight</label><br />
          <small><a href = 'https://www.google.com/search?q=convert+tons+to+pounds&oq=convert+tons+to+pounds'>Convert from tons</a></small><br />
          <input type='number' name='weight' placeholder='Dinosaur Weight' value={this.props.dinoWeight} onChange={this.handleOnChange} />
        </div>

        <div className="col-auto">
        Temporal Range
          <small id="passwordHelpBlock" className="form-text text-muted">When did it live? Example: 150-140 MYA)</small>
          <input type='text' name='temporal_range' placeholder='Temporal Range' value={this.state.temporal_range} onChange={this.handleOnChange} />
      </div>


    <div className="col-auto">
          <label>Year Discovered</label><br />
          <input type='number' name='year_discovered' placeholder='Year Discovered' value={this.state.year_discovered} onChange={this.handleOnChange} />
    </div>

  <div className="col-auto">
          <label>Picture URL</label><br />
          <input type='url' name='picture_url' placeholder='Paste the URL of a picture of this dinosaur here.' value={this.state.picture_url} onChange={this.handleOnChange} /><br />

</div>

  <div className="col-auto">
          <label id='description'>Fun Fact or Brief Description</label><br />
          <textarea name='summary' id='description' rows="5" cols="80" placeholder='Description' value={this.state.summary} onChange={this.handleOnChange} /><br />
</div>

          </div>


</small>
          <input type='submit' value='Edit Dinosaur!'/>

        </form>
      </div>
    )
  }
}


DinosaurEdit.defaultProps = {
  dinosaurs: {}
}

export default connect (null, {editDinosaur})(DinosaurEdit)
