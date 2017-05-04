import {NavigationActions} from 'react-navigation';

import {Navigator} from '../components/root';
import {RESET, POP, PUSH} from '../actions';
import {INITIAL_ROUTE} from '../util';

const initialState = Navigator.router.getStateForAction(
  Navigator.router.getActionForPathAndParams(INITIAL_ROUTE)
);

const nextState = (state, action) => {
  switch (action.type) {
    case PUSH:
      return Navigator.router.getStateForAction(NavigationActions.navigate(action.payload), state);

    case RESET:
      return Navigator.router.getStateForAction(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate(action.payload),
        ],
      }), state);

    case POP:
      return Navigator.router.getStateForAction(NavigationActions.back(), state);
  }

  return null;
};

export default (state = initialState, action) => nextState(state, action) || state;
