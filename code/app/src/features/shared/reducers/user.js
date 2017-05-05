import {REHYDRATE} from 'redux-persist/constants';
import {LOGIN} from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case [LOGIN]:
      return action.payload.data;

    case REHYDRATE:
      return action.payload.user || state;

    default:
      return state;
  }
};
