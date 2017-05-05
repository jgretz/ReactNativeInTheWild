/* eslint-disable react/jsx-handler-names */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableHighlight} from 'react-native';
import autobind from 'class-autobind';

import {logout} from '../actions';
import logoutStyles from '../styles/logoutButton.js';

class LogoutButton extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  handlePress() {
    this.props.logout();
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.handlePress}>
          <Text style={logoutStyles.button}>Sign Out</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect(null, {logout})(LogoutButton);
