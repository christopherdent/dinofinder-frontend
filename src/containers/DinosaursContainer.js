import React from 'react'
import {connect} from 'react-redux'
import DinosaursList from '../components/DinosaursList'
import DinoTypeSlugs from '../components/DinoTypeSlugs'
import DinosaurInput from '../components/DinosaurInput'
import {fetchDinosaurs} from '../actions/fetchDinosaurs'

class DinosaursContainer extends React.Component {


  componentDidMount(){
     this.props.fetchDinosaurs()   ///accessing the function through props (instead of on its own) allows us to connect function with Redux Store
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
    dinosaurs: state.dinosaurs
  }
}


export default connect(mapStateToProps, {fetchDinosaurs})(DinosaursContainer)
