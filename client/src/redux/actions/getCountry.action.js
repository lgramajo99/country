import {
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAILURE,
    CURRENT_PAGE,
    TOTAL_PAGES,
    FETCH_TOP_COUNTRIES_FAILURE,
    FETCH_TOP_COUNTRIES_SUCCESS,
    FETCH_TOP_COUNTRIES_REQUEST,
    ORDER
} from '../action-types.js';


import axios from 'axios';

export function fetchDataCountryRequest() {
    return { type: FETCH_COUNTRY_REQUEST }
}

export function fetchDataCountrySuccess(data) {
    return { type: FETCH_COUNTRY_SUCCESS, payload: data }
}

export function fetchDataCountryFailure(error) {
    return { type: FETCH_COUNTRY_FAILURE, payload: error }
}

export function turnPage(currentPage) {
    return { type: CURRENT_PAGE, payload: currentPage }
}

export function orderCard(orderBy) {
    return { type: ORDER, payload: orderBy };
}

export function fetchCountries() {
    return async (dispatch, getState) => {
        const { currentPage } = getState().getCountry; // Obtiene currentPage del estado

        dispatch(fetchDataCountryRequest());
        try {
            const response = await axios.get('http://localhost:3001/countries');
            const countries = response.data;

            const itemsPerPage = 15;
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;

            const countriesPerPage = countries.slice(start, end);

            dispatch(fetchDataCountrySuccess(countriesPerPage));
            dispatch({
                type: TOTAL_PAGES,
                payload: Math.ceil(countries.length / itemsPerPage),
            });
        } catch (error) {
            dispatch(fetchDataCountryFailure(error));
        }
    };
}

// ################################################################
export function fetchTopCountrySuccess(topCountries) {
    return { type: FETCH_TOP_COUNTRIES_SUCCESS, payload: topCountries }
}
export function fetchTopCountryRequest() {
    return { type: FETCH_TOP_COUNTRIES_REQUEST }
}

export function fetchTopCountryFailure(topError) {
    return { type: FETCH_TOP_COUNTRIES_FAILURE, payload: topError }
}

export function fetchTopCountriesName() {
    return async (dispatch) => {
        dispatch(fetchDataCountryRequest())
        try {
            const response = await axios.get('http://localhost:3001/countries');
            const countries = response.data.slice(25, 65);

            dispatch(fetchTopCountrySuccess(countries));

        } catch (topError) {
            dispatch(fetchDataCountryFailure(topError));
        }
    };
}