import React from 'react';
import {connect} from 'react-redux'
import ErasContainer from './containers/ErasContainer'
import DinoTypesContainer from './containers/DinoTypesContainer'
import DinosaursContainer from './containers/DinosaursContainer'
import DinosaurInput from './components/DinosaurInput'
import DinosaurEdit from './components/DinosaurEdit'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class App extends React.Component {
  

componentDidMount(){
  document.getElementById('main-heading').click();
}

renderTooltip = (props) => (
  <Tooltip {...props}>
    Choose an Era...
  </Tooltip>
);

  render() {
    return (
      <Router>
      <div className="App">
        <Jumbotron>
         
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={this.renderTooltip}
      > 

        <Link to='/dinofinder-frontend'>
          <h1 className='text-center' id="main-heading">D i n o F i n d e r </h1>
        </Link>
        </OverlayTrigger>,
  
      <br />
  
        <center><h5>The ancient creature collection anyone can edit!</h5></center>
  
          </Jumbotron>

      <Switch>
        
          <Route exact path='/dinofinder-frontend' component={ErasContainer} />
          <Route exact path='/:name/dino_types' component={DinoTypesContainer} />
          <Route exact path='/:name/dinosaurs' component={DinosaursContainer} />
          <Route exact path='/dinosaurs/new' component={DinosaurInput} />
          <Route exact path='/dinosaurs/:name/edit' component={DinosaurEdit} />
        </Switch>

      </div>
      </Router>
    );

  }
}


//way of accessing values in our store as props!
// const mapStateToProps = () => {
//   return {
//     eras: this.state.eras,
//     dinosaurs: this.state.dinosaurs
//
//   }
// }

//gives us ability to dispatch new actions to our store directly from this component


export default connect(null)(App);
