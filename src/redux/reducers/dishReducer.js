import { actionTypes } from "../constants/action-types";

const initialState = {
    dishes: [{
        id:1,
        title: "Fried Rice",
        kitchen: "elly's cuisine",
        category: "Rice",
        rating: "4.8"
    }]
}

export const dishReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SET_DISHES:
            return state;
    
        default:
            return state;
    }
}