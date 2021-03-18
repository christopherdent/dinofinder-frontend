export const editDinosaur = (dinosaur) => {

return (dispatch) => {
   fetch(`https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/${dinosaur.era_id}/dino_types/${dinosaur.dino_type_id}/dinosaurs/${dinosaur.id}`, {
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
