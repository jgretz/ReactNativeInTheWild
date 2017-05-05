import {REHYDRATE} from 'redux-persist/constants';
import {PRESCRIPTIONS_LOAD_FULFILLED} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case PRESCRIPTIONS_LOAD_FULFILLED:
      return action.payload.data;

    case REHYDRATE:
      return action.payload.prescriptions || state;

    default:
      return state;
  }
};
