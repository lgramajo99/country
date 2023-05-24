import { CREATE_ACTIVITY } from "../action-types";
import axios from 'axios';

export function createActivity(activity) {
    return {
        type: CREATE_ACTIVITY,
        payload: activity,
    };
}

export const postActivity = (activityData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/activities', activityData);
            const newActivity = response;

            dispatch(createActivity(newActivity));
        } catch (error) {
            console.error('Error al crear la actividad:', error);
        }
    };
};
