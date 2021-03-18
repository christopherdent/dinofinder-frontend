

export const fetchDinoTypes = (url) => {

///pseudocode  if eraname=triassic, let url equal 1
//if eraname = jurassic, let url equal 2..

let slug = (url === 'Triassic') ? ('1') : ((url === 'Jurassic') ? ('2') : ('3'))

return (dispatch) => {

  // fetch(`http://localhost:3000/api/v1/eras/${url === 'Triassic' ? '1' : '2'}/dino_types`)  ///should i be fetching to different urls based on the params from the first page?  yes...
  return fetch(`https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/${slug}/dino_types`)
  .then(resp => resp.json())
  .then(dinotypes => dispatch({
      type: 'FETCH_DINOTYPES',
      payload: dinotypes
      }))
    }
  }
// }
