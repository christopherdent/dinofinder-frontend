import React from 'react'
import {connect} from 'react-redux'
import {fetchDinosaurs} from '../actions/fetchDinosaurs'
import { addDinosaur } from '../actions/addDinosaur'
import { editDinosaur } from '../actions/editDinosaur'
import {deleteDinosaur } from '../actions/deleteDinosaur'
import DinosaurInput from '../components/DinosaurInput'
import DinosaurEdit from '../components/DinosaurEdit'
import DinosaurCard from '../components/DinosaurCard'

class DinosaursContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          url: this.routeParam = props.match.params.name,
          showHide: false,
          showHide2: false,
          dinosaurs: []
      };
      this.hideComponent = this.hideComponent.bind(this);
    }

  componentDidMount(){
    this.props.fetchDinosaurs(this.state.url)   ///accessing the function through props (instead of on its own) allows us to connect function with Redux Store; arg telling it which dinosaurs to fetch based on params
  }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.dinosaurs !== this.props.dinosaurs
  // }

handleDelete = (dinosaur) => {
    this.props.deleteDinosaur(dinosaur.id, dinosaur.dino_type.id, dinosaur.dino_type.era_id)
  }

hideComponent(name) {
  if (name === 'showHide') {
    this.setState({ showHide: !this.state.showHide });
  } else if (name === 'showHide2') {
    this.setState({ showHide2: !this.state.showHide2 });
  }
}

listDinos = () => {

  if (this.props.dinosaurs.dinosaurs) {
  return (
  this.props.dinosaurs.dinosaurs.map((dinosaur, index) =>
                 <div className='card w-75' key={index}>
                    <DinosaurCard
                      id={dinosaur.id}
                      name={dinosaur.name}
                      size={dinosaur.size}
                      weight={dinosaur.weight}
                      temporalRange={dinosaur.temporal_range}
                      yearDiscovered={dinosaur.year_discovered}
                      pictureUrl={dinosaur.picture_url}
                      summary={dinosaur.summary}
                      dinotypeId={dinosaur.dinoTypeId}
                      handleDelete={this.handleDelete}
                      dinosaur = {dinosaur} />
                    <button type="button" className="btn btn-primary" onClick={() => this.hideComponent("showHide2")}>Edit</button>

            <div> {this.state.showHide2 && <DinosaurEdit
                    url={this.state.url}
                    dinoId = {dinosaur.id}
                    dinoName = {dinosaur.name}
                    dinoSize = {dinosaur.size}
                    dinoWeight = {dinosaur.weight}
                    dinoRange = {dinosaur.temporal_range}
                    dinoYear = {dinosaur.year_discovered}
                    dinoPic = {dinosaur.picture_url}
                    dinoSummary = {dinosaur.summary}
                    dinoTypeId = {dinosaur.dino_type_id} />}

                      </div>
                </div>)
              )
            
            }
          }

  render(){

    const { dinosaurs } = this.props;
    const { showHide, showHide2 } = this.state;

    return (
      <div className="container">
        <div className="text-center">
          <button type="button" className="btn btn-primary" onClick={() => this.hideComponent("showHide")}>{showHide === false ? "Add Dinosaur to Collection" : "Hide Form"}</button>
        </div>
          <div> {showHide && <DinosaurInput url={this.state.url} />}<hr /></div>


            <div className="row">
              <div className="col-md-4">

                  {this.listDinos()}
            </div>
          </div>
        </div>
      )
    }
  }

function mapStateToProps(state) {
  return {
    dinosaurs: state.dinosaurs,
    url: state.url
  }
}

//
// function mapDispatchToProps(dispatch) {
//   return {
//     fetchDinosaurs: () => dispatch(fetchDinosaurs(this.state.url)),
//     addDinosaur: () => dispatch(addDinosaur()),
//     editDinosaur: () => dispatch(editDinosaur()),
//     deleteDinosaur: () => dispatch(deleteDinosaur())
//   }
// }


export default connect(mapStateToProps, {fetchDinosaurs, addDinosaur, editDinosaur, deleteDinosaur})(DinosaursContainer)   //here, fetchDinosaurs is sitting in for mapDispatchToProps and doing this makes IT a prop.
// export default connect(mapStateToProps, mapDispatchToProps)(DinosaursContainer)   //here, fetchDinosaurs is sitting in for mapDispatchToProps and doing this makes IT a prop.
