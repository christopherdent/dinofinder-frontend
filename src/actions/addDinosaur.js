import {fetchDinosaurs} from '../actions/fetchDinosaurs'



export const addDinosaur = (data, url) => {



  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/eras/1/dino_types/1/dinosaurs", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json)
    .then(dinosaur =>
      dispatch({type: 'ADD_DINOSAUR', payload: dinosaur})
      )
  }
}

/// EXAMPLE URL - in reality i think i need to know the ERA and DINO TYPE and interpolate them into the URL.  (just add those options to the form and interpolate wth dot notation off of data)
