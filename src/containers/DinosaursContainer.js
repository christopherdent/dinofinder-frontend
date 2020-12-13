import React from 'react'
import {connect} from 'react-redux'
import {fetchDinosaurs} from '../actions/fetchDinosaurs'
import { addDinosaur } from '../actions/addDinosaur'
import { editDinosaur } from '../actions/editDinosaur'
import {deleteDinosaur } from '../actions/deleteDinosaur'
import { dinoTypeSelector } from '../actions/dinoSelector'
import DinosaurInput from '../components/DinosaurInput'
import DinosaurCard from '../components/DinosaurCard'
import {Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap'

class DinosaursContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          url: this.routeParam = props.match.params.name,
          showHide: false,
          dinosaurs: []
      };
      this.hideComponent = this.hideComponent.bind(this);
    }

  componentDidMount(){
    this.props.fetchDinosaurs(this.state.url)   ///accessing the function through props (instead of on its own) allows us to connect function with Redux Store; arg telling it which dinosaurs to fetch based on params
  }

handleDelete = (dinosaur) => {
    this.props.deleteDinosaur(dinosaur.id, dinosaur.dino_type.id, dinosaur.dino_type.era_id)
  }

hideComponent(name) {
  if (name === 'showHide') {
    this.setState({ showHide: !this.state.showHide });
  }
}

listDinos = () => {

  if (this.props.dinosaurs.dinosaurs) {
    return (
      this.props.dinosaurs.dinosaurs.map((dinosaur, index) =>
                 <div key={dinosaur.id}>
                    <DinosaurCard
                      id={dinosaur.id}
                      name={dinosaur.name}
                      size={dinosaur.size}
                      weight={dinosaur.weight}
                      temporalRange={dinosaur.temporal_range}
                      yearDiscovered={dinosaur.year_discovered}
                      pictureUrl={dinosaur.picture_url}
                      summary={dinosaur.summary}
                      dinotypeId={dinosaur.dino_type_id}
                      handleDelete={this.handleDelete}
                      dinosaur = {dinosaur}
                      />
                </div>)
              )
            }
          }

  render(){

    const { dinosaurs } = this.props;
    const { showHide } = this.state;

    return (
      <Container>
        <div className="text-center">
          <Button variant="success" onClick={() => this.hideComponent("showHide")}>{showHide === false ? "Add Dinosaur to Collection" : "Hide Form"}</Button>
        </div>
        <div> {showHide && <DinosaurInput url={this.state.url} dinoType={dinoTypeSelector(this.state.url)}/>}<hr /></div>

          <Row>
            {this.listDinos()}
          </Row>

      </Container>

      )
    }
  }

function mapStateToProps(state) {
  return {
    dinosaurs: state.dinosaurs,
    url: state.url
  }
}


export default connect(mapStateToProps, {fetchDinosaurs, addDinosaur, editDinosaur, deleteDinosaur})(DinosaursContainer)   //here, fetchDinosaurs is sitting in for mapDispatchToProps and doing this makes IT a prop.
// export default connect(mapStateToProps, mapDispatchToProps)(DinosaursContainer)   //here, fetchDinosaurs is sitting in for mapDispatchToProps and doing this makes IT a prop.
