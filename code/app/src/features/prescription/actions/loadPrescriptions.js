import {get} from '../../../util';

export const PRESCRIPTIONS_LOAD = 'PRESCRIPTIONS_LOAD';
export const PRESCRIPTIONS_LOAD_FULFILLED = 'PRESCRIPTIONS_LOAD_FULFILLED';
export const PRESCRIPTIONS_LOAD_REJECTED = 'PRESCRIPTIONS_LOAD_REJECTED';

export const loadPrescriptions = () =>
({
  type: PRESCRIPTIONS_LOAD,
  payload: get('prescriptions'),
});
