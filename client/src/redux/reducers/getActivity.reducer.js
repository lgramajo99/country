import {
    FETCH_ACTIVITY_FAILURE,
    FETCH_ACTIVITY_REQUEST,
    FETCH_ACTIVITY_SUCCESS,
    ARRORW_SORT_ID
} from '../action-types.js'

const initialState = {
    data: [],
    loading: false,
    error: null,
    arrowId: false,
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
        case ARRORW_SORT_ID:
            const sortedData = state.data.slice().sort((a, b) => {
                if (state.arrowId) {
                    return a.id - b.id;
                } else {
                    return b.id - a.id;
                }
            });
            return {
                ...state,
                data: sortedData,
                arrowId: !state.arrowId,
            };

        default:
            return state;
    }
}

export default getActivityReducer;