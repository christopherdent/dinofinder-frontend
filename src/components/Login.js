import React from 'react'

const Login = ({ handleLoginFormChange, handleLoginFormSubmit}) => {
  return (
    <div className="Login">
      <form onSubmit={handleLoginFormSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleLoginFormChange}
      
        /><br/>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleLoginFormChange}
        
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
