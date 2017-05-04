import {Loading} from '../../shared/components';
import {List as PatientList} from '../../patient/components';
import {PrescriptionListForPatient} from '../../prescription/components';

// route names
export const LOADING = 'LOADING';
export const PATIENT_LIST = 'PATIENT_LIST';
export const PRESCRIPTION_LIST_FOR_PATIENT = 'PRESCRIPTION_LIST_FOR_PATIENT';

// initial route
export const INITIAL_ROUTE = LOADING;

// map to components
export default {
  [LOADING]: {screen: Loading},
  [PATIENT_LIST]: {screen: PatientList},
  [PRESCRIPTION_LIST_FOR_PATIENT]: {screen: PrescriptionListForPatient},
};
