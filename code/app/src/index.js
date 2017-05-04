import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {configureStore, configureHttp} from './configure';
import {Root} from './features/navigation/components';

// boot
const store = configureStore();
configureHttp(store);

// root class
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
