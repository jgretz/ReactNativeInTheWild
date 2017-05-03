/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import patient from './features/patient/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    patient,
  }),
  form: formReducer,
});

export default rootReducer;