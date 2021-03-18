import React from 'react'
import {connect} from 'react-redux'
import {addDinosaur} from '../actions/addDinosaur'
import { Form, Row, Col, Button } from 'react-bootstrap';

class DinosaurInput extends React.Component {
state = {
  name: '',
  size: '',
  weight: '',
  temporal_range: '',
  year_discovered: '',
  picture_url: '',
  summary: '',
  dino_type_id: this.props.dinoType
}


handleOnChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleOnSubmit = (event) => {
  event.preventDefault()
  this.props.addDinosaur(this.state, this.props.url)
  this.setState(
    { name: '',
      size: '',
      weight: '',
      temporal_range: '',
      year_discovered: '',
      picture_url: '',
      summary: '',
      dino_type_id: ''
    }
  )
  this.collapse()
}

collapse = () => {
  let toggleButton = document.getElementById('add')
  toggleButton.click()

}

  render() {

    return (
      <React.Fragment>
        <h5>Add a Dinosaur</h5>
        <small className="form-text text-muted">HINT: You can find most of the info below from the <a href="https://en.wikipedia.org/wiki/Portal:Mesozoic" target="_blank" rel='noreferrer'>Wikipedia Mesozoic Portal.</a>  At a minimum, please include the category, name and picture URL. </small>
<br/>

        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group controlId="formBasic">
            <Form.Label>Category: When did it live and what kind of dinosaur was it? </Form.Label>

            <Form.Control as='select' custom
              size="lg"
              name="dino_type_id"
              id="dino_type_id"
              value={this.props.dinoType}
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
            </Form.Control>
          </Form.Group>

  <Form.Row>
    <Form.Group as={Col}>
          <Form.Label>Dinosaur Name</Form.Label>
<br/><br/>
          <Form.Control type='text' name='name' placeholder='Dinosaur Name' value={this.state.name} onChange={this.handleOnChange} required/>
          </Form.Group>

          <Form.Group as={Col}>
          <Form.Label>Dinosaur Size</Form.Label>
          <small  className="form-text text-muted">In feet</small>
          <Form.Control type='number' name='size' placeholder='Dinosaur Size' value={this.state.size} onChange={this.handleOnChange} />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Label>Dinosaur Weight</Form.Label>
          <small className="form-text text-muted"><a href = 'https://www.google.com/search?q=convert+tons+to+pounds&oq=convert+tons+to+pounds' target="_blank" rel='noreferrer'>Convert from tons</a></small>
          <Form.Control type='number' name='weight' placeholder='Dinosaur Weight' value={this.state.weight} onChange={this.handleOnChange} />
    </Form.Group>
  </Form.Row>


  <Form.Row>
    <Form.Group as={Col}>
        <Form.Label>Temporal Range</Form.Label>
        <small className="form-text text-muted">When did it live? Example: 150-140 MYA)</small>
          <Form.Control type='text' name='temporal_range' placeholder='Temporal Range' value={this.state.temporal_range} onChange={this.handleOnChange} />
    </Form.Group>

    <Form.Group as={Col}>
        <Form.Label>Year Discovered</Form.Label>
<br/><br/>
      <Form.Control type='number' name='year_discovered' placeholder='Year Discovered' value={this.state.year_discovered} onChange={this.handleOnChange} />
    </Form.Group>
    <Form.Group as={Col}>
          <Form.Label>Picture URL</Form.Label>
          <small className="form-text text-muted">Google Images:  <a target="_blank" rel='noreferrer' href={`https://www.google.com/search?tbm=isch&as_q=${this.state.name}&tbs=isz:lt,islt:4mp,sur:fmc`}>{this.state.name}</a></small>
          <Form.Control type='url' name='picture_url' placeholder='Paste the URL of a picture of this dinosaur here.' value={this.state.picture_url} onChange={this.handleOnChange} required />

    </Form.Group>
  </Form.Row>

<Form.Row>
  <Form.Group>
          <Form.Label id='description'>Fun Fact or Brief Description</Form.Label>
          <br/>
          <small className="form-text text-muted">(500 Characters Max)</small>
          <Form.Control as='textarea' name='summary' maxLength="500" id='description' rows="5" cols="80" placeholder='Description' value={this.state.summary} onChange={this.handleOnChange} />
  </Form.Group>
          </Form.Row>
          <Button type='submit' variant="primary" size='lg' block>Add Dinosaur!</Button>

  </Form>

</React.Fragment>
    )
  }
}



export default connect(null, {addDinosaur})(DinosaurInput)
