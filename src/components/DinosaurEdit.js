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
      dino_type_id: this.props.dinoTypeId,
      era_id: this.props.era,
      };
    }

componentDidMount() {
  // this.setState({
  //   id: this.props.dinoId,
  //   name: this.props.dinoName,
  //   size: this.props.dinoSize,
  //   weight: this.props.dinoWeight,
  //   temporal_range: this.props.dinoRange,
  //   year_discovered: this.props.dinoYear,
  //   picture_url: this.props.dinoPic,
  //   summary: this.props.dinoSummary,
  //   dino_type_id: this.props.dinoTypeId,
  //   era_id: this.props.era,
  //
  // })
}

handleOnChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleOnSubmit = (event) => {
  event.preventDefault()
  let dinosaur = {...this.state, id: this.state.id}
  this.props.editDinosaur(dinosaur)
}

collapse = () => {
  let toggleButton = document.getElementById(this.state.id)
  toggleButton.click()

}



  render() {

    return (
    <div>
       <form onSubmit={this.handleOnSubmit}>
        <h5>Edit a Dinosaur</h5>
        <small>HINT: You can find most of the info below from <a href="https://en.wikipedia.org/wiki/Dinosaur">Wikipedia.</a>  At a minimum, please include the category, name and picture URL. </small>
        <br /> <br />

          <small>

          <label>Category: When did it live and what kind of dinosaur was it? </label><br />

            <select className="form-control"
              name="dino_type_id"
              id="dino_type_id"
              value={this.state.dino_type_id ? this.state.dino_type_id : ''}
              onChange={this.handleOnChange}
              required>
              <option value=''></option>
              <option value="1">Triassic Herbivore</option>
              <option value="2">Triassic Carnivore</option>
              <option value="3">Triassic Avian</option>
              <option value="4">Triassic Marine</option>
              <option value="5">Jurassic Herbivore</option>
              <option value="6">Jurassic Carnivore</option>
              <option value="7">Jurassic Avian</option>
              <option value="8">Jurassic Marine</option>
              <option value="9">Cretaceous Herbivore</option>
              <option value="10">Cretaceous Carnivore</option>
              <option value="11">Cretaceous Avian</option>
              <option value="12">Cretaceous Marine</option>
            </select>
            <br /> <br />

            <input type='hidden' name='dino_type' value={this.props.dinoType} />

              <div className="form-row align-items-center">
                <div className="col-auto">
                  <label>Dinosaur Name</label><br /><br />
                  <input type='text' name='name' placeholder='Dinosaur Name' value={this.state.name} onChange={this.handleOnChange} required/><br />
                </div>

                  <div className="col-auto">
                  <label>Dinosaur Size</label><br />
                  <small>In feet</small><br />
                  <input type='number' name='size' placeholder='Dinosaur Size' value={this.state.size} onChange={this.handleOnChange} />
                </div>
                <div className="col-auto">
                  <label>Dinosaur Weight</label><br />
                  <small><a href = 'https://www.google.com/search?q=convert+tons+to+pounds&oq=convert+tons+to+pounds'>Convert from tons</a></small><br />
                  <input type='number' name='weight' placeholder='Dinosaur Weight' value={this.state.weight} onChange={this.handleOnChange} />
                </div>

                <div className="col-auto">
                <label>Temporal Range</label>
                  <small id="passwordHelpBlock" className="form-text text-muted">When did it live? Example: 150-140 MYA)</small>
                  <input type='text' name='temporal_range' placeholder='Temporal Range' value={this.state.temporal_range} onChange={this.handleOnChange} />
              </div>


            <div className="col-auto">
                  <label>Year Discovered</label><br />
                  <input type='number' name='year_discovered' placeholder='Year Discovered' value={this.state.year_discovered} onChange={this.handleOnChange} />
            </div>

            <div className="col-auto">
                  <label>Picture URL</label><br />
                  <input type='url' name='picture_url' placeholder='Paste the URL of a picture of this dinosaur here.' value={this.state.picture_url} onChange={this.handleOnChange} required /><br />

            </div>

            <div className="col-auto">
                  <label id='description'>Fun Fact or Brief Description</label><br />
                  <textarea name='summary' id='description' maxLength="500" rows="12" cols="30" placeholder='Description' value={this.state.summary} onChange={this.handleOnChange} /><br />
            </div>

                  </div>


            </small>

              <input type='submit' value='Commit Changes' onClick= {this.collapse} />

        </form>
      </div>
    )
  }
}

DinosaurEdit.defaultProps = {
  dinosaurs: {}
}





export default connect (null, {editDinosaur})(DinosaurEdit)
