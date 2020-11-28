export function fetchDinosaurs() {
return (dispatch) => {

  fetch('http://localhost:3000/api/v1/eras/1/dino_types/1/dinosaurs')  ///should i be fetching to different urls based on the params from the first page?  yes...
  .then(resp => resp.json())
  .then(dinosaurs => dispatch({
      type: 'FETCH_DINOSAURS',
      payload: dinosaurs
    }))
  }
}
