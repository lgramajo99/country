import {
    FETCH_COUNTRY_FAILURE,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_REQUEST,
    CURRENT_PAGE,
    TOTAL_PAGES,
    FETCH_TOP_COUNTRIES_FAILURE,
    FETCH_TOP_COUNTRIES_SUCCESS,
    FETCH_TOP_COUNTRIES_REQUEST,
    ORDER,
    FILTER_CONTINENT,
} from "../action-types";

const initialState = {
    loading: false,
    error: null,
    data: [],
    currentPage: 1,
    topLoading: false,
    topError: null,
    topCountries: [],
    orderBy: 'default',
    continentes: []
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
        case ORDER:
            let sortedData;
            if (action.payload === 'ascendente') {
                sortedData = [...state.data].sort((a, b) => (a.id > b.id ? 1 : -1));
            } else if (action.payload === 'descendente') {
                sortedData = [...state.data].sort((a, b) => (a.id < b.id ? 1 : -1));
            } else {
                sortedData = [...state.data];
            }

            return {
                ...state,
                data: sortedData,
                orderBy: action.payload,
            };
        case FILTER_CONTINENT:
            let filterData;
            filterData = action.payload === 'all' ? state.data.continente : state.data.continente.filter(p => p.continente === action.payload)

            return {
                ...state,
                continentes: filterData
            }
        default:
            return state;
    }
}

export default getCountryReducer;