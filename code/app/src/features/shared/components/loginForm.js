import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import autobind from 'class-autobind';

import containerStyles from '../../../styles/container';
import loginStyles from '../styles/login';

import {submitLogin} from '../actions';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    autobind(this);
  }

  handleSubmit(form) {
    this.props.submitLogin(form);
  }

  renderInput({input: {onChange, ...restInput}, secureTextEntry}) {
    if (secureTextEntry) {
      return <TextInput style={loginStyles.input} onChangeText={onChange} {...restInput} secureTextEntry />;
    }

    return <TextInput style={loginStyles.input} onChangeText={onChange} {...restInput} autoCapitalize="none" />;
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <View style={containerStyles.container}>
        <Text style={loginStyles.title}>Sign In</Text>
        <View>
          <Text style={loginStyles.label}>Email</Text>
          <Field name="email" component={this.renderInput} style={loginStyles.input} />
        </View>
        <View>
          <Text style={loginStyles.label}>Password</Text>
          <Field name="password" component={this.renderInput} secureTextEntry />
        </View>
        <TouchableHighlight onPress={handleSubmit(this.handleSubmit)}>
          <View>
            <Text style={loginStyles.button}>Submit</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const connectedLogin = connect(null, {submitLogin})(Login);

export default reduxForm({
  form: 'login',
})(connectedLogin);
