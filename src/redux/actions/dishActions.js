import { actionTypes } from "../constants/action-types";

export const setDishes = (dishes) => {
    return {
        type: actionTypes.SET_DISHES,
        payload: dishes
    }
}

export const selectedDish = (dish) => {
    return {
        type: actionTypes.SELECTED_DISH,
        payload: dish
    }
}