/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import patient from './features/patient/reducers';
import prescription from './features/prescription/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    patient,
    prescription,
  }),
  form: formReducer,
});

export default rootReducer;
