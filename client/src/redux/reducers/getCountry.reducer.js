import {
    FETCH_COUNTRY_FAILURE,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_REQUEST,
    CURRENT_PAGE,
    TOTAL_PAGES,
    FETCH_TOP_COUNTRIES_FAILURE,
    FETCH_TOP_COUNTRIES_SUCCESS,
    FETCH_TOP_COUNTRIES_REQUEST,
} from "../action-types";

const initialState = {
    loading: false,
    error: null,
    data: [],
    currentPage: 1,
    topLoading: false,
    topError: null,
    topCountries: [],
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
                error: action.payload,
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
        case FETCH_TOP_COUNTRIES_SUCCESS:
            return {
                ...state,
                topLoading: false,
                topCountries: action.payload,
            };
        case FETCH_TOP_COUNTRIES_REQUEST:
            return {
                ...state,
                topLoading: true,
            }
        case FETCH_TOP_COUNTRIES_FAILURE:
            return {
                ...state,
                topLoading: false,
                topError: action.payload,
            }
        default:
            return state;
    }
}

export default getCountryReducer;