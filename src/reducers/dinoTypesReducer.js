export default function dinoTypesReducer(state = {dinotypes: []}, action){
 
  switch (action.type) {
    case 'FETCH_DINOTYPES':
      return { dinotypes: action.payload }
   default:
      return state
    }
}
