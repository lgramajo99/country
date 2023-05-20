import {
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAILURE,
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

export function fetchCountries() {
    return async (dispatch) => {
        dispatch(fetchDataCountryRequest())
        try {
            const response = await axios.get('http://localhost:3001/countries')
            const countries = response.data;

            dispatch(fetchDataCountrySuccess(countries))
        } catch (error) {
            dispatch(fetchDataCountryFailure(error))
        }
    }
}