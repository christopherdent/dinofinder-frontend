export default function erasReducer(state = {eras: []}, action){

  switch (action.type) {
    case 'FETCH_ERAS':
      return { eras: action.payload }
    default:
      return state
    }
}
