import {loadPatients} from '../../patient/actions';
import {loadPrescriptions} from '../../prescription/actions';

import {reset, PATIENT_LIST} from '../../navigation';

const toLoad = [loadPatients, loadPrescriptions];

export const loadApp = () => dispatch => {
  const waitFor = load => {
    const action = load();
    dispatch(action);

    return action.payload;
  };

  Promise.all(toLoad.map(waitFor))
  .then(() => {
    dispatch(reset(PATIENT_LIST));
  });
};
