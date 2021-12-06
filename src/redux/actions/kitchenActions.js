import { kitchenActionTypes } from "../constants/kitchen-action-types";

export const setKitchenes = (kitchens) => {
    return {
        type: kitchenActionTypes.SET_KITCHENS,
        payload: kitchens
    }
}

export const selectedKitchen = (kitchenId) => {
    return {
        type: kitchenActionTypes.SELECTED_KITCHEN,
        payload: kitchenId
    }
}