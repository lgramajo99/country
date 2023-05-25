import {
    FETCH_ACTIVITY_FAILURE,
    FETCH_ACTIVITY_REQUEST,
    FETCH_ACTIVITY_SUCCESS
} from '../action-types.js'

const initialState = {
    data: [],
    loading: false,
    error: null,
}

function getActivityReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIVITY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_ACTIVITY_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_ACTIVITY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }

        default:
            return state;
    }
}

export default getActivityReducer;