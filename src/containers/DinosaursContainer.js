import React from 'react'
import {connect} from 'react-redux'
import DinosaursList from '../components/DinosaursList'
import DinosaurInput from '../components/DinosaurInput'
import {fetchDinosaurs} from '../actions/fetchDinosaurs'
import {addDinosaur } from '../actions/addDinosaur'

class DinosaursContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          url: this.routeParam = props.match.params.name,
          showHide: false,
          dinosaurs: props.dinosaurs.dinosaurs
      };
      this.hideComponent = this.hideComponent.bind(this);
    }

  componentDidMount(){

     this.props.fetchDinosaurs(this.state.url)   ///accessing the function through props (instead of on its own) allows us to connect function with Redux Store; arg telling it which dinosaurs to fetch based on params
  }

  componentDidUpdate(prevProps){   ///this seems to have solved issue of dino not appearing on add and not disappearing on delete... but why?

    // if (this.props.dinosaurs !== prevProps.dinosaurs) {
      // this.props.fetchDinosaurs(this.state.url)
    //   }
    }


  hideComponent(name) {
    if (name === 'showHide') {
      this.setState({ showHide: !this.state.showHide });
    }
  }


  render(){
     const { showHide } = this.state;

    return (
      <div className="container">
        <div className="text-center">
          <button type="button" className="btn btn-primary" onClick={() => this.hideComponent("showHide")}>
            {showHide === false ? "Add Dinosaur to Collection" : "Hide Form"}
          </button>
        </div>
          <div> {showHide && <DinosaurInput />} <hr /></div>
          <div><DinosaursList dinosaurs={this.props.dinosaurs.dinosaurs}/></div>

      </div>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    dinosaurs: state.dinosaurs,
    url: state.url
  }
}


export default connect(mapStateToProps, {fetchDinosaurs, addDinosaur})(DinosaursContainer)   //here, fetchDinosaurs is sitting in for mapDispatchToProps and doing this makes IT a prop.
