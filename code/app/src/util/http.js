/* Taken from the npm package truefit-react-utils */
import _ from 'lodash';
import axios from 'axios';

import offline from './offline';
import {GET, POST, PUT, DELETE} from './constants';

class HttpFactory {
  create() {
    // allow the user to specify either a static object or a function to be executed
    let config = this.config;
    if (_.isFunction(config)) {
      config = config();
    }

    return axios.create(config);
  }
}

// internal
const httpFactory = new HttpFactory();

// configure externally
export const configureHttp = config => {
  httpFactory.config = config;
};

// verbs
export const get = (url, params) =>
  offline({factory: httpFactory, method: GET, url, params});

export const post = (url, data) =>
  offline({factory: httpFactory, method: POST, url, data});

export const put = (url, data) =>
  offline({factory: httpFactory, method: PUT, url, data});

export const httpDelete = (url, params) =>
  offline({factory: httpFactory, method: DELETE, url, params});
