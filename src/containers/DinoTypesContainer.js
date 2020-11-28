import React from 'react'
import {connect} from 'react-redux'
import DinoTypesList from '../components/DinoTypesList'
import {FetchDinoTypes} from '../actions/fetchDinoTypes'


class DinoTypesContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          url: this.routeParam = props.match.params.name,
          dinotypes: ''
      };
  }
  //can you add an argument to fetchDinoTypes so when it fetches, it only fetches the ones from that era?  Can it get era info from URL?
componentDidMount(){
    this.props.FetchDinoTypes(this.state.url)
  }

  render(){
    return (
      <div className="container">
        <div><FetchDinoTypes url={this.state.url} /></div>
        <div><DinoTypesList dinotypes={this.props.dinotypes.dinotypes}/></div>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    dinotypes: state.dinotypes,
    url: state.url
    }
}


export default connect(mapStateToProps, {FetchDinoTypes} )(DinoTypesContainer)
