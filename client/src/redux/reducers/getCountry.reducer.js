import { FETCH_COUNTRY_FAILURE, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_REQUEST } from "../action-types";

const initialState = {
    loading: false,
    error: null,
    data: []
};

function getCountryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case FETCH_COUNTRY_REQUEST:
            return {
                ...state,
                loading: true,
            }

        default:
            return { state }
    }
}

export default getCountryReducer;