export const addUser = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3000/api/v1/users", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          history.push('/')
        }
      })
      .catch(console.log)
  }
}
