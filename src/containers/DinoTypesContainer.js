
import React from 'react'
import DinoTypeCard from '../components/DinoTypeCard'
import {connect} from 'react-redux'
import DinoTypesList from '../components/DinoTypesList'
import {fetchDinoTypes} from '../actions/fetchDinoTypes'
import { Container } from 'react-bootstrap';

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
      <Container>
        <h2 className = 'text-center'>
          <br />
            What types of creatures are you looking for?<br /><br />
            </h2>  
        <DinoTypesList listDinoTypes={this.listDinoTypes()}/>
       
        </Container>

<br /> <br /><br />
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



