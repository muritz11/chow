import { combineReducers } from "redux";
import { dishReducer, selectedDishReducer } from "./dishReducer";
import { kitchenReducer, selectedKitchenReducer } from "./kitchenReducer";

const reducers = combineReducers({
    allDishes: dishReducer,
    dish: selectedDishReducer,
    allKitchens: kitchenReducer,
    kitchen: selectedKitchenReducer,
})

export default reducers;