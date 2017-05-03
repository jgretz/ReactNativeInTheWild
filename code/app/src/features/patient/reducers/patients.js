import {PATIENTS_LOAD_FULFILLED} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case PATIENTS_LOAD_FULFILLED:
      return action.payload.data;

    default:
      return state;
  }
};
