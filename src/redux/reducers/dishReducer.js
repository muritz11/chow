import { actionTypes } from "../constants/action-types";

const initialState = {
    dishes: [
        {
        id:1,
        title: "Fried Rice",
        kitchen: "elly's cuisine",
        kitId:1,
        category: "Rice",
        rating: "4.8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam.",
        price: "NGN1380"
        },
        {
        id:2,
        title: "Nsala",
        kitchen: "susy's delight",
        kitId:2,
        category: "Rice",
        rating: "4.8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam.",
        price: "NGN1380"
        },
        {
        id:3,
        title: "Abacha",
        kitchen: "Toks grills",
        kitId:3,
        category: "Rice",
        rating: "4.8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam.",
        price: "NGN1380"
        },
        {
        id:4,
        title: "Bread fruit",
        kitchen: "elly's cuisine",
        kitId:1,
        category: "Rice",
        rating: "4.8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam.",
        price: "NGN1380"
        },
        {
        id:5,
        title: "Jellof Rice",
        kitchen: "elly's cuisine",
        kitId:1,
        category: "Rice",
        rating: "4.8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam.",
        price: "NGN1380"
        },
        {
        id:6,
        title: "Yam w/Hot sauce",
        kitchen: "Toks grills",
        kitId:3,
        category: "Rice",
        rating: "4.8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam.",
        price: "NGN1380"
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