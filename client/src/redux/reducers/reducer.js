import { combineReducers } from 'redux';
import getCountryReducer from './getCountry.reducer.js';
import getCountryIdReducer from './getCountryId.reducer.js';
import getCountryNameReducer from './getCountryName.reducer.js';
import createActivityReducer from './postActivity.reducer.js';
import getActivityReducer from './getActivity.reducer.js';

const rootReducer = combineReducers({
    getCountry: getCountryReducer,
    getCountryId: getCountryIdReducer,
    getCountryName: getCountryNameReducer,
    postActivity: createActivityReducer,
    getActivity: getActivityReducer,
})

export default rootReducer