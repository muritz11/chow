import { combineReducers } from "redux";
import { dishReducer } from "./dishReducer";

const reducers = combineReducers({
    allDishes: dishReducer,
})

export default reducers;