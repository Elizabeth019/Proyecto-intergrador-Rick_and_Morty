import { ADD_FAV, REMOVE_FAV} from "../redux/actions"

const  initialState = {
    myFavorites: [],

}

export default function MyFavorites (state = initialState, action){
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return {
            ...state,
            myFavorites: state.myFavorites.filter((char)=> char.id !== action.payload)
            }
        default:
            return {
            ...state,
            }
    }
}

