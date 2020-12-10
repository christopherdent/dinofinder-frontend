export default function dinosaursResducer(state = { dinosaurs: [] }, action){
  switch (action.type) {


    case 'FETCH_DINOSAURS':
        return { ...state, dinosaurs: action.payload }
        // return { dinosaurs: action.payload }
        // return {...state, dinosaurs: [...state.dinosaurs, action.payload]}

    case 'ADD_DINOSAUR':

           return {
             ...state,
             dinosaurs: [...state.dinosaurs, action.payload]
           }

    case 'DELETE_DINOSAUR':
     
      return {
        ...state, dinosaurs: [...state.dinosaurs.filter(dinosaur => dinosaur.id === action.dinosaurId ? false : true)]
      }

// this line almost works, just missing dinosaur:        // return   state.dinosaurs.filter(dinosaur => dinosaur.id === action.id ? false : true)


    case 'EDIT_DINOSAUR':
      // return state.dinosaurs.map(dinosaur => dinosaur.id === action.id ? action.payload : dinosaur)
      return {...state, dinosaurs: [...state.dinosaurs, action.payload]}

    default:
       return state
    }

}
