import {fetchDinosaurs} from '../actions/fetchDinosaurs'
import { dinoTypeSelector } from '../actions/dinoSelector'

export const addDinosaur = (data, url) => {
  dinoTypeSelector(url)

  const eraSelector = (url) => {
    if (url.includes('Triassic')){
      return 1
    } else if (url.includes('Jurassic')){
      return 2
    } else if (url.includes('Cretaceous')){
      return 3
    }
  }
//since its loading from scratch I use dinoSelector and eraSelector to complete the correct fetch URL, in lieu of a dinosaur object like in the others.
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/eras/${eraSelector(url)}/dino_types/${dinoTypeSelector(url)}/dinosaurs`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())

    .then(dinosaur =>
      // console.log(dinosaur)
      dispatch({type: 'ADD_DINOSAUR', payload: dinosaur})
      )
  }
}

/// EXAMPLE URL - in reality i think i need to know the ERA and DINO TYPE and interpolate them into the URL.  (just add those options to the form and interpolate wth dot notation off of data)
