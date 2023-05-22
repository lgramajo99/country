import axios from 'axios';
import {
    FETCH_COUNTRY_FAILURE_ID,
    FETCH_COUNTRY_REQUEST_ID,
    FETCH_COUNTRY_SUCCESS_ID,

} from '../action-types.js';

export function fetchCountryIdFailure(error) {
    return { type: FETCH_COUNTRY_FAILURE_ID, payload: error };
}

export function fetchCountryIdRequest() {
    return { type: FETCH_COUNTRY_REQUEST_ID }
}

export function fetchCountryIdSuccess(data) {
    return { type: FETCH_COUNTRY_SUCCESS_ID, payload: data }
}

export function fetchCountryId() {
    return async (dispatch) => {
        dispatch(fetchCountryIdRequest())
        try {
            const response = await axios.get('http://localhost:3001/countries:idPais')
            const country = response.data;

            dispatch(fetchCountryIdSuccess(country))

        } catch (error) {
            dispatch(fetchCountryIdFailure(error))
        }
    }
}