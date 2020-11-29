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
          dinosaurs: ''
      };
  }

  componentDidMount(){
     this.props.fetchDinosaurs(this.state.url)   ///accessing the function through props (instead of on its own) allows us to connect function with Redux Store
  }

  render(){

    return (
      <div className="container">
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
