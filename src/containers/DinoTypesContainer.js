import React from 'react'
import {connect} from 'react-redux'
import DinoTypesList from '../components/DinoTypesList'
import {fetchDinoTypes} from '../actions/fetchDinoTypes'


class DinoTypesContainer extends React.Component {

//can you add an argument to fetchDinoTypes so when it fetches, it only fetches the ones from that era?  Can it get era info from URL?
  componentDidMount(){
    this.props.fetchDinoTypes()
    
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
