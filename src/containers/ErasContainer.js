import React from 'react'
import {connect} from 'react-redux'
import ErasList from '../components/ErasList'
import {fetchEras} from '../actions/fetchEras'
import Jumbotron from 'react-bootstrap/Jumbotron'

class ErasContainer extends React.Component {

  componentDidMount(){
    this.props.fetchEras()   ///accessing the function through props (instead of on its own) allows us to connect function with Redux Store
  }

  render(){
    return (

      <div className="container">
<Jumbotron>
        <h2 className = 'text-center'>
          Choose an Era to Begin <br /><br /><br />
        </h2>
        <div><ErasList eras={this.props.eras.eras}/></div>
</Jumbotron>
    </div>
    )
  }

}


//get redux store and map it to props.  sucessfully getting the eras from our state!
const mapStateToProps = state => {
  return {
    eras: state.eras
  }
}

export default connect(mapStateToProps, {fetchEras})(ErasContainer)
