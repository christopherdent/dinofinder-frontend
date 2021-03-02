import React from 'react';
import {connect} from 'react-redux'
import ErasContainer from './containers/ErasContainer'
import DinoTypesContainer from './containers/DinoTypesContainer'
import DinosaursContainer from './containers/DinosaursContainer'
import DinosaurInput from './components/DinosaurInput'
import DinosaurEdit from './components/DinosaurEdit'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Secrets from './components/Secrets'
import Heading from './components/Heading'

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
  const token = localStorage.getItem("token")
  if (token) {
    fetch("http://localhost:3000/get_current_user/", {
      headers: {
        "Authorization": token
      }
    })
      .then(r => r.json())
      .then(resp =>  {
        if (resp.error) {
          alert(resp.error)
        } else {
          this.setState({
            currentUser: resp.user
          })
        }
      })
      .catch(console.log)
  }
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

      this.setState({

        currentUser: userJSON
      })
    }
  })


    .catch(console.log)

}

getSerets = () => {

  fetch("http://localhost:3000/api/v1/secrets/")
  .then(r => r.json())
  .then(secrets =>  {
      if (secrets.error) {
          alert("Not authorized for those secrets")
      } else {
      //success - we want to change state
      this.setState({
        secrets
      })
    }
  })
}

  render() {
    const { currentUser } = this.state
    return (


      <Router>
        <div className="App">

          <div>
            <button onClick={this.getSerets}>Show User Secrets</button>
            <Secrets secrets={this.state.secrets} />
          </div>

          <Heading />




          { currentUser ? <Route exact path='/' component={ErasContainer} currentUser = {currentUser} /> : <center>Please Log Into Dinofinder</center> }

          <Switch>
          <Route exact path='/:name/dino_types' component={DinoTypesContainer} />
          <Route exact path='/:name/dinosaurs' component={DinosaursContainer} />
          <Route exact path='/dinosaurs/new' component={DinosaurInput} />
          <Route exact path='/dinosaurs/:name/edit' component={DinosaurEdit} />
        </Switch>


        <center>

        <Login
        handleLoginFormSubmit={this.handleLoginFormSubmit}
        handleLoginFormChange={this.handleLoginFormChange}
        email={this.state.loginForm.email}
        password={this.state.loginForm.password}
          />



        </center>




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
