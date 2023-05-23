import { combineReducers } from 'redux';
import getCountryReducer from './getCountry.reducer.js';
import getCountryIdReducer from './getCountryId.reducer.js';

const rootReducer = combineReducers({
    getCountry: getCountryReducer,
    getCountryId: getCountryIdReducer,
})

export default rootReducer