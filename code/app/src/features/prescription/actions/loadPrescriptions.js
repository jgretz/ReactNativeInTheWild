import {get} from '../../../util';

export const PRESCRIPTIONS_LOAD = 'PRESCRIPTIONS_LOAD';

export const loadPrescriptions = () =>
({
  type: PRESCRIPTIONS_LOAD,
  payload: get('prescriptions'),
});
