import {NetInfo} from 'react-native';
import {GET, POST, PUT, DELETE} from './constants';
import {log} from './log';

// watch connectivity
let isOnline = false;
const handleConnectivityChange = online => {
  isOnline = online;
};

NetInfo.addEventListener('change', handleConnectivityChange);

// execute request
const executeRequest = request => {
  const {factory, method, url, params, data} = request;

  const axios = factory.create();
  const map = {
    [GET]: () => axios.get(url, {params}),
    [POST]: () => axios.post(url, data),
    [PUT]: () => axios.put(url, data),
    [DELETE]: () => axios.delete(url, {params}),
  };

  return map[method]();
};

export const offline = request => {
  if (isOnline) {
    log('Online');
    return executeRequest(request);
  }

  log('Offline');
  return Promise.reject();
};
