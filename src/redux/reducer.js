import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET} from "./action"

const  initialState = {
    myFavorites: [],
    allCharacter: [],
}

export default function MyFavorites (state = initialState, action){
    switch(action.type){
        case ADD_FAV:
            const addFav = [...state.allCharacter, action.payload]
            return{
                ...state,
                myFavorites:[...addFav],
                allCharacter:[...addFav],
            }
        case REMOVE_FAV:
            const deleteFav = state.allCharacter.filter(e => e.id !== action.payload)
            return {
                ...state,
                myFavorites: [...deleteFav],
                allCharacter: [...deleteFav]
            }
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacter.filter((filt) => filt.gender === action.payload)
            }
        case ORDER:
            let ordFav;
                if(action.payload === "Ascendente"){
                    ordFav = state.myFavorites.sort((a,b) => a.id > b.id ? 1 : -1);
                } else {
                    ordFav = state.myFavorites.sort((a,b) => a.id < b.id ? 1 : -1);
                }
                return {
                    ...state,
                    myFavorites: [...ordFav]
                }
                case RESET:
                    return{
                        ...state,
                        myFavorites: state.allCharacter,
                    }
            default:
            return {
                ...state,
            }
    }
}

