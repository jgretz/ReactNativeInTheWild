/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import navigation from './features/navigation/reducers';
import patient from './features/patient/reducers';
import prescription from './features/prescription/reducers';
import shared from './features/shared/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    navigation,
    patient,
    prescription,
    shared,
  }),
  form: formReducer,
});

export default rootReducer;
