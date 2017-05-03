import {get} from '../../../util';

export const PATIENTS_LOAD = 'PATIENTS_LOAD';
export const PATIENTS_LOAD_FULFILLED = 'PATIENTS_LOAD_FULFILLED';
export const PATIENTS_LOAD_REJECTED = 'PATIENTS_LOAD_REJECTED';

export const loadPatients = () =>
({
  type: PATIENTS_LOAD,
  payload: get('patients'),
});
