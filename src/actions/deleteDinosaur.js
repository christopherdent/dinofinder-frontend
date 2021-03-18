export const deleteDinosaur = (dinosaurId, dinoTypeId, eraId) => {

    return (dispatch) => {

    fetch(`https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/${eraId}/dino_types/${dinoTypeId}/dinosaurs/${dinosaurId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(dinosaur => dispatch({ type: 'DELETE_DINOSAUR', dinosaurId }))

  }
}
