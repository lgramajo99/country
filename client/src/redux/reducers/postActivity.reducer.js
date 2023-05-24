import { CREATE_ACTIVITY } from "../action-types";

const initialState = {
    activities: [],
};

const createActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload],
            };

        default:
            return state;
    }
};

export default createActivityReducer;
