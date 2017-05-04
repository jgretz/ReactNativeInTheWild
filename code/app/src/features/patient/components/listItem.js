import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import autobind from 'class-autobind';

import containerStyles from '../../../styles/container';
import listItemStyles from '../styles/listItem';

import {push, PRESCRIPTION_LIST_FOR_PATIENT} from '../../navigation';

// component
class ListItem extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  handlePress() {
    this.props.push(PRESCRIPTION_LIST_FOR_PATIENT, {patient: this.props.patient});
  }

  render() {
    const {patient} = this.props;

    return (
      <TouchableHighlight onPress={this.handlePress}>
        <View style={[containerStyles.container, listItemStyles.row]}>
          <Text style={listItemStyles.name}>{patient.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

// redux
const PatientListItem = connect(null, {push})(ListItem);

// wrapper
export default patient => (
  <PatientListItem patient={patient} />
);
