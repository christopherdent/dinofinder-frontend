import React from 'react'



const Login = ({ handleLoginFormChange, handleLoginFormSubmit, email, password }) => {

// function handle(event) {
//   event.preventDefault()
//   console.log('I got clicked')
// }


  return (
    <div className="Login">
      <form onSubmit={handleLoginFormSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleLoginFormChange}
          value={email}
        /><br/>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleLoginFormChange}
          value={password}
        /><br/>
        <input
          type="submit"
          value="Login"
        />
      </form>
    </div>
  )
}
export default Login
