import {PATIENTS_LOAD} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case `${PATIENTS_LOAD}_FULFILLED`:
      return action.payload.data;

    default:
      return state;
  }
};
