import {get} from '../../../util';

export const PATIENTS_LOAD = 'PATIENTS_LOAD';

export const loadPatients = () =>
({
  type: PATIENTS_LOAD,
  payload: get('patients'),
});
