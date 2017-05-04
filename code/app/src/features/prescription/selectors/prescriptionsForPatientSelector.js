import {createSelector} from 'reselect';

import patientSelector from './patientSelector';
import prescriptionsSelector from './prescriptionsSelector';

export default createSelector(patientSelector, prescriptionsSelector,
  (patient, prescriptions) => prescriptions.filter(p => p.patientId === patient.id));
