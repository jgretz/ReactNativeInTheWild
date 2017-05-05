import {REHYDRATE} from 'redux-persist/constants';
import {PATIENTS_LOAD_FULFILLED} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case PATIENTS_LOAD_FULFILLED:
      return action.payload.data;

    case REHYDRATE:
      return action.payload.patients || state;

    default:
      return state;
  }
};
