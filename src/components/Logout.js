import React from 'react'



const Logout = (props) => {

// function handle(event) {
//   event.preventDefault()
//   console.log('I got clicked')
// }


  return (
    <div className="Logout">
    <form>
        <input
          type="submit"
          value="Logout"
          onClick={props.handleLogout}
        />
      </form>
    </div>
  )
}
export default Logout
