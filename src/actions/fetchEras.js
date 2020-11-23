export function fetchEras(action) {
//action creator creates an action object which goes to the reducer, which then returns new state
  fetch('http://localhost:3000/api/v1')
  .then(resp => resp.json())
  .then(data => console.log(data))
  return action 
}
