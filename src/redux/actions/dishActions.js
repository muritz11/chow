import { dishActionTypes } from "../constants/dish-action-types";

export const setDishes = (dishes) => {
    return {
        type: dishActionTypes.SET_DISHES,
        payload: dishes
    }
}

export const selectedDish = (dishId) => {
    return {
        type: dishActionTypes.SELECTED_DISH,
        payload: dishId
    }
}