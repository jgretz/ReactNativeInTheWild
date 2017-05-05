import {reset, LOGIN} from '../../navigation';
import {purge} from '../../../util';

export const LOGOUT = 'LOGOUT';

export const logout = () => dispatch => {
  dispatch(reset(LOGIN));
  purge();

  dispatch({
    type: LOGOUT,
  });
};
