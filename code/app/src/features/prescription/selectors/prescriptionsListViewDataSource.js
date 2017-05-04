import _ from 'lodash';
import {createSelector} from 'reselect';
import {ListView} from 'react-native';

import prescriptionsForPatientSelector from './prescriptionsForPatientSelector';

export default createSelector(prescriptionsForPatientSelector, prescriptions => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  return ds.cloneWithRows(_.sortBy(prescriptions, p => p.drug));
});
