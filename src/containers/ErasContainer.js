import React from 'react'
import {connect} from 'react-redux'
import ErasList from '../components/ErasList'
import {fetchEras} from '../actions/fetchEras'
import EraCard from '../components/EraCard'
import { trackPromise } from 'react-promise-tracker';
import {Container } from 'react-bootstrap'
import LoadingIndicator from '../components/LoadingIndicator'

class ErasContainer extends React.Component {


  componentDidMount(){
    trackPromise(
    this.props.fetchEras()   ///accessing the function through props (instead of on its own) allows us to connect function with Redux Store
    )
  }

  listEras = () => {
    // if (this.props.eras.eras) {
      return (
        this.props.eras.eras.map((era, index) =>
        <EraCard
          key={index}
          id={era.id}
          name={era.name}
          pictureUrl={era.picture_url} />
        )
      )
    // }
  }

  render(){
    return (

    <Container>
<br />
      <h2 className = 'text-center'>
        choose an era to explore...<br /><br />
      </h2>
      <LoadingIndicator /> 
        <div>
          <ErasList listEras={this.listEras()}/>
        </div>
      <br /><br />
    </Container>
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
