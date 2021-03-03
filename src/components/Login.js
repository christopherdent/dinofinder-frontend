import React from 'react'
import { Link } from 'react-router-dom';



const Login = ({ handleLoginFormChange, handleLoginFormSubmit, email, password }) => {


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
          type="password"
          name="password"
          placeholder="password"
          onChange={handleLoginFormChange}
          value={password}
        /><br/><br/>
        <input
          type="submit"
          value="Login"
        />
      </form>
      <br /> <br />
      <center>No account? <Link to="/signup"> Create one for free. </Link></center>

    </div>
  )
}
export default Login
