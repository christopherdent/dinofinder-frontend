import React from 'react'

import ErasList from '../components/ErasList'
import {connect} from 'react-redux'
import {fetchEras} from '../actions/fetchEras'


class ErasContainer extends React.Component {


  componentDidMount(){
    this.props.fetchEras()
  }

  render(){
    return (
      <div className="container">
        <div className="center"><ErasList eras={this.props.eras}/></div>
      </div>
    )
  }

}

//get redux store and map it to props.  sucessfully getting the eras from our state!
const mapStateToProps = (state) => {
  return {
    eras: state.eras
  }
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, {fetchEras})(ErasContainer)
