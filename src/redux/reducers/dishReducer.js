import { actionTypes } from "../constants/action-types";

const initialState = {
    dishes: [
        {
        id:1,
        title: "Fried Rice",
        kitchen: "elly's cuisine",
        category: "Rice",
        rating: "4.8"
        },
        {
        id:2,
        title: "Nsala",
        kitchen: "susy's eelight",
        category: "Rice",
        rating: "4.8"
        },
        {
        id:3,
        title: "Abacha",
        kitchen: "Toks grills",
        category: "Rice",
        rating: "4.8"
        },
        {
        id:4,
        title: "Bread fruit",
        kitchen: "elly's cuisine",
        category: "Rice",
        rating: "4.8"
        },
        {
        id:5,
        title: "Jellof Rice",
        kitchen: "elly's cuisine",
        category: "Rice",
        rating: "4.8"
        },
        {
        id:6,
        title: "Yam w/Hot sauce",
        kitchen: "Toks grills",
        category: "Rice",
        rating: "4.8"
        },
    ]
}

//not that we'll need to use setDishes since we're not yet fetching any API
export const dishReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SET_DISHES:
            return {...state, dishes: payload};
    
        default:
            return state;
    }
}

export const selectedDishReducer = (state={}, {type, payload}) => {
    switch (type) {
        case actionTypes.SELECTED_DISH:
            return {...state, payload}
    
        default:
            return state
    }
}