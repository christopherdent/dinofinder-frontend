export const editDinosaur = (dinosaur) => {


return (dispatch) => {
  return fetch(`http://localhost:3000/api/v1/eras/1/dino_types/${dinosaur.dino_type_id}/dinosaurs/${dinosaur.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(dinosaur)
    })
    .then(response => response.json())
    .then(dino => dispatch({type: 'EDIT_DINOSAUR', payload: dino}))
  }

}
