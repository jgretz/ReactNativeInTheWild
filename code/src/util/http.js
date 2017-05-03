/* Taken from the npm package truefit-react-utils */

import _ from 'lodash';
import axios from 'axios';

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

const httpFactory = new HttpFactory();

// configure externally
export const configureHttp = config => {
  httpFactory.config = config;
};

// verbs
export const get = (url, params) =>
  httpFactory.create().get(url, {params});

export const post = (url, data) =>
  httpFactory.create().post(url, data);

export const put = (url, data) =>
  httpFactory.create().put(url, data);

export const httpDelete = (url, params) =>
  httpFactory.create().delete(url, {params});
