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
import Login from './components/Login'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      },
      secrets: []
    }
  }

componentDidMount(){
  document.getElementById('main-heading').click();
}


handleLoginFormChange = event => {
  const { name, value } = event.target
  this.setState({
    loginForm: {
      ...this.state.loginForm,
      [name]: value
    }
  })
}

handleLoginFormSubmit = event => {
  event.preventDefault()
  console.log("Submit has been clicked.")
  // now form needs to go to backend where user is authenticated, and if valid, send user back to front end.  with that respose you will set state.
  const userInfo = this.state.loginForm
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: userInfo
    })
  }
  fetch("http://localhost:3000/api/v1/login", configObj)
    .then(response => response.json())
    .then(userJSON => {
    if (userJSON.error) {

      alert('Not allowed!')
    } else {
      debugger
      this.setState({

        currentUser: userJSON
      })
    }
  })


    .catch(console.log)

}



  render() {
    const { currentUser } = this.state
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
          <h3>{ currentUser ? <Route exact path='/' component={ErasContainer} /> : 'not logged in' }</h3>
          <center>Welcome User<br/>
          <Login
          handleLoginFormSubmit={this.handleLoginFormSubmit}
          handleLoginFormChange={this.handleLoginFormChange}
          email={this.state.loginForm.email}
          password={this.state.loginForm.password}
            />
          {this.state.loginForm.email}
          </center>


      <Switch>

         
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
