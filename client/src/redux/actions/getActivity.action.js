import axios from 'axios';
import {
    FETCH_ACTIVITY_FAILURE,
    FETCH_ACTIVITY_REQUEST,
    FETCH_ACTIVITY_SUCCESS
} from '../action-types.js';

export function fetchDataActivityFailure(error) {
    return { type: FETCH_ACTIVITY_FAILURE, payload: error };
}

export function fetchDataActivityRequest() {
    return { type: FETCH_ACTIVITY_REQUEST };
}

export function fetchDataActivitySuccess(data) {
    return { type: FETCH_ACTIVITY_SUCCESS, payload: data };
}

export function fetchActivity() {
    return async (dispatch) => {
        dispatch(fetchDataActivityRequest());
        try {
            const response = await axios.get('http://localhost:3001/activities');
            const activities = response.data;

            dispatch(fetchDataActivitySuccess(activities));
        } catch (error) {
            dispatch(fetchDataActivityFailure(error));
        }
    };
}
