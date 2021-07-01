
export function fetchDinosaurs(url) {

return (dispatch) => {

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

  return fetch(`https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/${eraSelector(url)}/dino_types/${dinoTypeSelector(url)}/dinosaurs`)  ///fetching to different urls based on the params from the first page.
  .then(resp => resp.json())
  .then(dinosaurs => dispatch({
      type: 'FETCH_DINOSAURS',
      payload: dinosaurs
      }))
    }
  }


export default fetchDinosaurs
