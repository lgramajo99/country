import axios from "axios";
import {
    FETCH_COUNTRY_FAILURE_NAME,
    FETCH_COUNTRY_REQUEST_NAME,
    FETCH_COUNTRY_SUCCESS_NAME
} from "../action-types";

export function fetchCountryNameFailure(error) {
    return { type: FETCH_COUNTRY_FAILURE_NAME, payload: error }
}

export function fetchCountryNameRequest() {
    return { type: FETCH_COUNTRY_REQUEST_NAME }
}

export function fetchCountryNameSuccess(data) {
    return { type: FETCH_COUNTRY_SUCCESS_NAME, payload: data }
}

export function fetchCountryName(name) {
    return async (dispatch) => {
        dispatch(fetchCountryNameRequest())
        try {
            const response = await axios.get(`http://localhost:3001/countries/name`, {
                params: { name: name }
            });
            const country = response.data;

            dispatch(fetchCountryNameSuccess(country))
        } catch (error) {
            dispatch(fetchCountryNameFailure(error))
        }
    }
}