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


class App extends React.Component {
  constructor(){
    super()
  }

componentDidMount(){
  document.getElementById('main-heading').click();
}


  render() {
    return (
      <Router>
      <div className="App">
        <Jumbotron>
         
        <Link to='/'>
        <h1 className='text-center' id="main-heading">DinoFinder 2020</h1>

        </Link>
      <br />
        <center><h5>The prehistoric card collection anyone can edit!</h5></center>
          </Jumbotron>

      <Switch>
          <Route exact path='/' component={ErasContainer} />
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
