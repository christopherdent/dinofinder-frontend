
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
        ...state,
        dinosaurs: [...state.dinosaurs.filter(dinosaur => dinosaur.id === action.dinosaurId ? false : true)]   ///returning a copy of the state as well as an array of all dinos other than the one that was just deleted.
      }
      case 'EDIT_DINOSAUR':
    ///you need to return the state WITHOUT the dinosaur you edited, IF THE DINOSAUR.DINOTYPEID is different from the actual DINOTYPE ID for that page...


        let dinos = state.dinosaurs.map(dinosaur => {
          if (dinosaur.id === action.payload.id) {    ///if dinosaur id = payload id.  also need conditional for era.  its saying era not found becaus the era HAS changed but the dino is still in state.  you need to tell it not to return that dino if the era been changed.  hmm.
            return action.payload  ///return the modified dinosaur card
          } else {
            return dinosaur
          }  ///either way we're chucking it into dinos.  we need a way to exclude it from dinos if it is a different era.
        })

        let first = state.dinosaurs.[0].dino_type_id  ///finally solved it.  now you are creating dinos above and returning edits as needed but when you return the whole state, you make sure you only return the dinos with the proper category id based on item 0 in the array (if youre editing there will always be a 0.).
          return {...state, dinosaurs: dinos.filter(dino => dino.dino_type_id === first) }  //return state array with any updated dino card but WITHOUT any dinosaurs of another era (fixes era change bug)


          default:
           return state
        }
      }
