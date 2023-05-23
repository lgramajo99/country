import {
    FETCH_COUNTRY_FAILURE_NAME,
    FETCH_COUNTRY_REQUEST_NAME,
    FETCH_COUNTRY_SUCCESS_NAME
} from "../action-types";

const initialState = {
    loading: false,
    error: null,
    data: [],
}

function getCountryNameReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRY_FAILURE_NAME:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case FETCH_COUNTRY_REQUEST_NAME:
            return {
                ...state,
                loading: true,
            }
        case FETCH_COUNTRY_SUCCESS_NAME:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        default:
            return state;
    }
}

export default getCountryNameReducer;