import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import containerStyles from '../../../styles/container';
import loadingStyles from '../styles/loading';

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
      <View style={containerStyles.container}>
        <Text style={loadingStyles.loading}>Loading ...</Text>
      </View>
    );
  }
}

export default connect(null, {loadApp})(Loading);
