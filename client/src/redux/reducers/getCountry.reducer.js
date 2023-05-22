import { FETCH_COUNTRY_FAILURE, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_REQUEST, CURRENT_PAGE, TOTAL_PAGES } from "../action-types";

const initialState = {
    loading: false,
    error: null,
    data: [],
    currentPage: 1,
};

function getCountryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case FETCH_COUNTRY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COUNTRY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.payload,
            };
        default:
            return state;
    }
}

export default getCountryReducer;