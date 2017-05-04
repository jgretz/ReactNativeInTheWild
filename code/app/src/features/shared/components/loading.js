import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import styles from '../../../styles';
import {loadApp} from '../actions';

class Loading extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.props.loadApp();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading ...</Text>
      </View>
    );
  }
}

export default connect(null, {loadApp})(Loading);
