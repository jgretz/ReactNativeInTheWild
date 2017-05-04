import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class List extends Component {
  static navigationOptions = {
    title: 'Patient List',
  };

  render() {
    return (
      <View>
        <Text>Hello Patients</Text>
      </View>
    );
  }
}

export default connect()(List);
