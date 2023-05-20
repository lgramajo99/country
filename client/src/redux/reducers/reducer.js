import { combineReducers } from 'redux';
import getCountryReducer from './getCountry.reducer';

const rootReducer = combineReducers({
    getCountry: getCountryReducer,
})

export default rootReducer