/* eslint-disable */
import React, {Component} from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {LoginForm} from '../../src/features/shared/components/';

// create mockStore
const mockStore = configureStore();
const store = mockStore({});

// tests
describe('login', () => {
  let loginForm = null;
  beforeEach(() => {
    loginForm = renderer.create(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(loginForm).toMatchSnapshot();
  });
});
