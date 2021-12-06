import { kitchenActionTypes } from "../constants/kitchen-action-types";

const initialState = {
    kitchens: [
        {
            id: 1,
            name: "elly's cuisine",
            hearts: 278,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam."
        },
        {
            id: 2,
            name: "susy's cuisine",
            hearts: 278,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam."
        },
        {
            id: 3,
            name: "toks grills",
            hearts: 278,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam."
        },
    ]
}

export const kitchenReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case kitchenActionTypes.SET_KITCHENS:
            return {...state, kitchens: payload};
    
        default:
            return state;
    }
}

export const selectedKitchenReducer = (state={}, {type, payload}) => {
    switch (type) {
        case kitchenActionTypes.SELECTED_KITCHEN:
            return {...state, payload}
    
        default:
            return state
    }
}