import {post} from '../../../util';
import {reset, LOADING} from '../../navigation';

export const LOGIN = 'LOGIN';

export const submitLogin = creds => dispatch => {
  post('auth', creds)
  .then(response => {
    dispatch({
      type: LOGIN,
      payload: response,
    });

    dispatch(reset(LOADING));
  })
  .catch(() => {
    alert('Bad Login'); // eslint-disable-line
  });
};
