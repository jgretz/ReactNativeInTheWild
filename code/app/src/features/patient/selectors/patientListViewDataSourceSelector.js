import _ from 'lodash';
import {createSelector} from 'reselect';
import {ListView} from 'react-native';

import patientsSelector from './patientsSelector';

export default createSelector(patientsSelector, patients => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  return ds.cloneWithRows(_.sortBy(patients, p => p.name));
});
