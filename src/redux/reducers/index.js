import { combineReducers } from "redux";
import { dishReducer, selectedDishReducer } from "./dishReducer";

const reducers = combineReducers({
    allDishes: dishReducer,
    dish: selectedDishReducer
})

export default reducers;