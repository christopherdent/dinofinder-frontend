import {fetchDinosaurs} from '../actions/fetchDinosaurs'
import { dinoTypeSelector } from '../helpers/DinoSelector.js'
import { eraSelector } from '../helpers/DinoSelector.js'

export const addDinosaur = (data, url) => {
  dinoTypeSelector(url)


//since its loading from scratch I use dinoSelector and eraSelector helpers to complete the correct fetch URL, in lieu of a dinosaur object like in the others.
  return (dispatch) => {
    return fetch(`https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/${eraSelector(url)}/dino_types/${dinoTypeSelector(url)}/dinosaurs`, {
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
