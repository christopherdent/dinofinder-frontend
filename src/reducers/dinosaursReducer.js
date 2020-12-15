import {collapseForm} from '../components/DinosaurEdit'

export default function dinosaursResducer(state = { dinosaurs: [] }, action){

  switch (action.type) {

    case 'FETCH_DINOSAURS':
        return {
          ...state,
          dinosaurs: action.payload
        }

    case 'ADD_DINOSAUR':
         return {
           ...state,
             dinosaurs: [...state.dinosaurs, action.payload]
         }

    case 'DELETE_DINOSAUR':
           return {
        ...state, dinosaurs: [...state.dinosaurs.filter(dinosaur => dinosaur.id === action.dinosaurId ? false : true)]   ///returning a copy of the state as well as an array of all dinos other than the one that was just deleted.
      }

    case 'EDIT_DINOSAUR':
    
    let dinos = state.dinosaurs.map(dinosaur => {
      if (dinosaur.id === action.payload.id) {
        return action.payload  ///return the modified dinosaur card

      } else {
        return dinosaur
      }
    })
    return {...state, dinosaurs: dinos}  //return the state with the modified dinosaur

      default:
       return state
    }
  }
