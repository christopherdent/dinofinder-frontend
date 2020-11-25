import React from 'react'
import {connect} from 'react-redux'
import DinosaursList from '../components/DinosaursList'
import DinosaurInput from '../components/DinosaurInput'


class DinosaursContainer extends React.Component {

  render(){
    return (
      <div className="container">
      <div className="center">Dinosaurs Container</div>
      <DinosaurInput/>
      <DinosaursList/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dinosaurs: state.dinosaurs
  }
}
export default connect(mapStateToProps)(Dinosaurs)
