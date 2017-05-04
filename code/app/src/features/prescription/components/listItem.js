import React from 'react';
import {View, Text} from 'react-native';

import containerStyles from '../../../styles/container';
import listItemStyles from '../styles/listItem';

// wrapper
export default script => (
  <View style={[containerStyles.container, listItemStyles.row]}>
    <Text style={listItemStyles.drug}>{script.drug}</Text>
  </View>
);
