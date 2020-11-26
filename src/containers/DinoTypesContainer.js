import React from 'react'
import {connect} from 'react-redux'
import DinoTypesList from '../components/DinoTypesList'
import {fetchDinoTypes} from '../actions/fetchDinoTypes'


class DinoTypesContainer extends React.Component {

  componentDidMount(){
    this.props.fetchDinoTypes()   ///accessing the function through props (instead of on its own) allows us to connect function with Redux Store
  }

  render(){
    return (
      <div className="container">
      <div><DinoTypesList dinotypes={this.props.dinotypes.dinotypes}/></div>
      <div></div>
    </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    dinotypes: state.dinotypes
  }
}

export default connect(mapStateToProps, {fetchDinoTypes} )(DinoTypesContainer)
