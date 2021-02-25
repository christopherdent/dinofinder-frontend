import React from 'react'

const Login = () => {
  return (
    <div className='login'>

      <form>
        <input
        type="text"
        name="email"
        placeholder="email"
        />
        <br/>
        <input
        type="text"
        name="password"
        placeholder="password"
        />
        <br/>
        <input
        type="submit"
        value="Login"
        />

      </form>

    </div>

  )
}

export default Login
