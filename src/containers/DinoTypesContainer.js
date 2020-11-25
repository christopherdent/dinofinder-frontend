import React from 'react'
import {connect} from 'react-redux'
import DinoTypesList from '../components/DinoTypesList'

class DinoTypesContainer extends React.Component {


  render(){
    return (
      <div className="container">
      <div className="center">DinoTypes Container</div>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    dinotypes: state.dinotypes
  }
}
export default connect(mapStateToProps)(DinoTypes)
