import {Loading, LoginForm} from '../../shared/components';
import {List as PatientList} from '../../patient/components';
import {List as PrescriptionListForPatient} from '../../prescription/components';

// route names
export const LOGIN = 'LOGIN';
export const LOADING = 'LOADING';
export const PATIENT_LIST = 'PATIENT_LIST';
export const PRESCRIPTION_LIST_FOR_PATIENT = 'PRESCRIPTION_LIST_FOR_PATIENT';

// initial route
export const INITIAL_ROUTE = LOGIN;

// map to components
export default {
  [LOGIN]: {screen: LoginForm},
  [LOADING]: {screen: Loading},
  [PATIENT_LIST]: {screen: PatientList},
  [PRESCRIPTION_LIST_FOR_PATIENT]: {screen: PrescriptionListForPatient},
};
