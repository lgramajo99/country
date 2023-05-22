import {
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAILURE,
    CURRENT_PAGE,
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
        } catch (error) {
            dispatch(fetchDataCountryFailure(error));
        }
    };
}
