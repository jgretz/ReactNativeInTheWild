/* Taken from the npm package truefit-react-utils */
import _ from 'lodash';
import axios from 'axios';
import {NetInfo} from 'react-native';
import Realm from 'realm';

import {GET, POST, PUT, DELETE} from './constants';

// provide ability configure externally
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

export const configureHttp = config => {
  httpFactory.config = config;
};

// setup database to save offline requests
const realm = new Realm({
  schema: [{
    name: 'Request',
    properties: {
      method: 'string',
      url: 'string',
      params: {type: 'string', optional: true},
      data: {type: 'string', optional: true},
    },
  }],
});

// watch connectivity
let isOnline = false;
const handleConnectivityChange = online => {
  isOnline = online;
};

NetInfo.addEventListener('change', handleConnectivityChange);

// execute request
const executeRequest = request => {
  const {method, url, params, data} = request;

  const axios = httpFactory.create();
  const map = {
    [GET]: () => axios.get(url, {params}),
    [POST]: () => axios.post(url, data),
    [PUT]: () => axios.put(url, data),
    [DELETE]: () => axios.delete(url, {params}),
  };

  return map[method]();
};

export const performRequest = request => {
  if (isOnline) {
    return executeRequest(request);
  }

  realm.write(() => {
    realm.create('Request', {
      method: request.method,
      url: request.url,
      params: request.params ? JSON.stringify(request.params) : null,
      data: request.data ? JSON.stringify(request.data) : null,
    });
  });

  return Promise.reject();
};

// verbs
export const get = (url, params) =>
  performRequest({method: GET, url, params});

export const post = (url, data) =>
  performRequest({method: POST, url, data});

export const put = (url, data) =>
  performRequest({method: PUT, url, data});

export const httpDelete = (url, params) =>
  performRequest({method: DELETE, url, params});
