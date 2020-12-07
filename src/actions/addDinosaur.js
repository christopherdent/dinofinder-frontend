import {fetchDinosaurs} from '../actions/fetchDinosaurs'

export const addDinosaur = (data, url) => {
  const dinoTypeSelector = (url) => {
    let dino;
  switch (url) {
    case 'Triassic Herbivore':
    dino = '1'
      break;
    case 'Triassic Carnivore':
      dino = '2'
      break;
     case 'Triassic Avian':
      dino = '3'
      break;
    case 'Triassic Marine':
      dino = '4'
      break;
    case 'Jurassic Herbivore':
      dino = '5'
      break;
    case 'Jurassic Carnivore':
      dino = '6'
      break;
      case 'Jurassic Avian':
        dino = '7'
        break;
      case 'Jurassic Marine':
        dino = '8'
        break;
      case 'Cretaceous Herbivore':
        dino = '9'
        break;
      case 'Cretaceous Carnivore':
        dino = '10'
        break;
      case 'Cretaceous Avian':
        dino = '11'
        break;
      case 'Cretaceous Marine':
        dino = '12'
        break;
    default:
    console.log('it did not match anything')
      break;
    }
    return dino
  }

  const eraSelector = (url) => {
    if (url.includes('Triassic')){
      return 1
    } else if (url.includes('Jurassic')){
      return 2
    } else if (url.includes('Cretaceous')){
      return 3
    }
  }

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
