export default function dinosaursResducer(state = {dinosaurs: []}, action){
  switch (action.type) {
    case 'ADD_DINOSAUR':
      return {...state, dinosaurs: [...state.dinosaurs, action.payload]}
  }
  return state
}
