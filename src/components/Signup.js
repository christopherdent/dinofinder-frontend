import React from 'react'
import { Link } from 'react-router-dom';



class Signup extends React.Component {
state = {
  name: '',
  email: '',
  password: ''
}

handleOnChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleOnSubmit = (event) => {

  event.preventDefault()

  const userInfo = this.state

  const configObj = {

    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: userInfo
    })
  }

  fetch("http://localhost:3000/api/v1/users", configObj)
  .then(r => r.json())
  .then(resp => {  //open resp
    console.log(resp)
      this.setState({
          name: '',
          email: '',
        })
        alert(`${resp.name}, your account is created.`)
    })
    this.props.history.push('/')
  }

render() {
  return (
    <div className="Signup">
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={this.handleOnChange}
          value={this.state.name}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={this.handleOnChange}
          value={this.state.email}
        /><br/>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={this.handleOnChange}
          value={this.state.password}
        /><br/>
        <input
          type="submit"
          value="Login"
        />
      </form>

    </div>
    )
  }
}
export default Signup
