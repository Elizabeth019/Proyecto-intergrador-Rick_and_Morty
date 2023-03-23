export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV= "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";

const favoritos = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

const remove = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

const filterCards = (status) => {
    return {
        type: FILTER,
        payload: status
    }
}

const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}

export {favoritos, remove, filterCards, orderCards}