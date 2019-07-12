
import { createStore } from "redux";

const initialState = {
    property: "",
    address: "",
    city: '',
    state: '',
    zipcode: '',
    houses: '',
};

export const UPDATE_PROPERTY = "UPDATE_PROPERTY";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_PROPERTY:
            return { ...state, property: payload };
        case UPDATE_ADDRESS:
            return { ...state, address: payload };
        case UPDATE_CITY:
            return { ...state, city: payload };
        case UPDATE_STATE:
            return { ...state, state: payload };
        case UPDATE_ZIPCODE:
            return { ...state, zipcode: payload }
        default:
            return state;
    }
}

export default createStore(reducer);