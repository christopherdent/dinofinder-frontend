import React from 'react'
import {connect} from 'react-redux'
import ErasList from '../components/ErasList'
import {fetchEras} from '../actions/fetchEras'


class ErasContainer extends React.Component {


  componentDidMount(){
    this.props.fetchEras()   ///accessing the function through props (instead of on its own) allows us to connect function with Redux Store
  }

  render(){
    return (
      <div className="container">
        <div><ErasList eras={this.props.eras.eras}/></div>
      </div>
    )
  }

}

//get redux store and map it to props.  sucessfully getting the eras from our state!
const mapStateToProps = state => {
  return {
    // ...state,
    eras: state.eras
  }
}

// const mapDispatchToProps = () => {
// }

export default connect(mapStateToProps, {fetchEras})(ErasContainer)
