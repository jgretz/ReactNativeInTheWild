import {PRESCRIPTIONS_LOAD} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case `${PRESCRIPTIONS_LOAD}_FULFILLED`:
      return action.payload.data;

    default:
      return state;
  }
};
