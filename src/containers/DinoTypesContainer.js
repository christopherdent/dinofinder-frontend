import React from 'react'
import DinoTypeCard from '../components/DinoTypeCard'
import {connect} from 'react-redux'
import DinoTypesList from '../components/DinoTypesList'
import {fetchDinoTypes} from '../actions/fetchDinoTypes'


class DinoTypesContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          url: this.routeParam = props.match.params.name,
          dinotypes: ''
      };
  };

componentDidMount(){
    this.props.fetchDinoTypes(this.state.url)  //argument helps interpolate the proper URL in the action
};


listDinoTypes = () => {
  if (this.props.dinotypes.dinotypes) {
    return (
      this.props.dinotypes.dinotypes.map((dinotype, index) =>
        <DinoTypeCard
          key={index} 
          id={dinotype.id}
          name={dinotype.name}
          pictureUrl={dinotype.picture_url} />
        )
      );
    }
  }



  render(){
    return (
      <React.Fragment>
        <div className="container" id="centered">
        <div>
          <DinoTypesList listDinoTypes={this.listDinoTypes()}/>
        </div>
        </div>
      </React.Fragment>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    dinotypes: state.dinotypes,
    url: state.url
  }
};

export default connect(mapStateToProps, {fetchDinoTypes} )(DinoTypesContainer)
