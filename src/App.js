import React from 'react';
import {connect} from 'react-redux'
import ErasContainer from './containers/ErasContainer'
import DinoTypesContainer from './containers/DinoTypesContainer'
import DinosaursContainer from './containers/DinosaursContainer'
import DinosaurInput from './components/DinosaurInput'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

class App extends React.Component {



  render() {
    return (
      <Router>
      <div className="App">
        <Link to='/'>
        <h1 className='text-center'>DinoFinder 2020</h1>
        </Link>
      <Switch>
          <Route exact path='/' component={ErasContainer} />
          <Route exact path='/:name/dino_types' component={DinoTypesContainer} />
          <Route exact path='/:name/dinosaurs' component={DinosaursContainer} />
          <Route exact path='/dinosaurs/new' component={DinosaurInput} />
        </Switch>

      </div>
      </Router>
    );

  }
}
//way of accessing values in our store as props!
// const mapStateToProps = () => {
//   return {
//     eras: state.eras
//   }
// }

//gives us ability to dispatch new actions to our store directly from this component
const mapDispatchToProps = () => {

}

export default connect(null)(App);
