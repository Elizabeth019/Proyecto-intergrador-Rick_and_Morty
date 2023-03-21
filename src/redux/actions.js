export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV= "REMOVE_FAV"

const favoritos =(character)=>{
    return {
        type: ADD_FAV,
        payload: character
    }
}

const remove = (id)=>{
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export {favoritos, remove}