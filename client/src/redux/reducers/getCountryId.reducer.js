import { FETCH_COUNTRY_FAILURE_ID, FETCH_COUNTRY_REQUEST_ID, FETCH_COUNTRY_SUCCESS_ID } from "../action-types";

const initialState = {
    loading: false,
    error: null,
    data: []
}

function getCountryIdReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRY_FAILURE_ID:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_COUNTRY_REQUEST_ID:
            return {
                ...state,
                loading: true,
            }
        case FETCH_COUNTRY_SUCCESS_ID:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        default:
            return state
    }
}

export default getCountryIdReducer;