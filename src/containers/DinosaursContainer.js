import React from 'react'
import {connect} from 'react-redux'
import DinosaursList from '../components/DinosaursList'
import DinosaurInput from '../components/DinosaurInput'
import {fetchDinosaurs} from '../actions/fetchDinosaurs'



class DinosaursContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          url: this.routeParam = props.match.params.name,
          showHide: false,
          dinosaurs: ''
      };
      this.hideComponent = this.hideComponent.bind(this);
    }

  componentDidMount(){
     this.props.fetchDinosaurs(this.state.url)   ///accessing the function through props (instead of on its own) allows us to connect function with Redux Store
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



export default connect(mapStateToProps, {fetchDinosaurs})(DinosaursContainer)
