import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {loadPatients} from '../../patient/actions';
import {loadPrescriptions} from '../../prescription/actions';

class Loading extends Component {
  componentWillMount() {
    this.props.loadPatients();
    this.props.loadPrescriptions();
  }

  render() {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }
}

export default connect(null, {loadPatients, loadPrescriptions})(Loading);
