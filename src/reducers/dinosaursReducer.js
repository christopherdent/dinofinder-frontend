export default function dinosaursResducer(state = {dinosaurs: []}, action){
  switch (action.type) {
    case 'FETCH_DINOSAURS':
        return { dinosaurs: action.payload }

    case 'ADD_DINOSAUR':
      return {...state, dinosaurs: [...state.dinosaurs, action.payload]}

    case 'DELETE_DINOSAUR':
      const dinosaurs = state.dinosaurs.filter(dinosaur => dinosaur.id !== action.id); ///keep all the dinos except the one who's id matches action id
      return {...state, dinosaurs}

    default:
       return state
    }

}
