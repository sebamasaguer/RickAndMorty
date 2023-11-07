import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";


const initialState = {
  myFavorites:[],
  allCharaters:[]
};

const rootReducer = (state = initialState, action) => {
  // console.log({state});

  switch (action.type) {
    case ADD_FAV:
      return { ...state, 
        myFavorites:  action.payload,
        allCharacters: action.payload
      };
     
    case REMOVE_FAV:
     return { ...state,
       myFavorites:   action.payload,
        allCharacters: action.payload
      };
    case FILTER:
      let copy2 = [...state.allCharacters];
      let filterGender = copy2.filter((character) => {
        return character.gender === action.payload
      })
      return {
        ...state,
        myFavorites: filterGender
      };
      case ORDER:
        let copy3 = [...state.allCharacters];
        return {
          ...state,
          myFavorites: copy3.sort((a,b) => {
            return action.payload === "A" ? a.id - b.id : b.id - a.id
          })
        };
    default:
      return  {...state}
  }
}

export default rootReducer;