import {NetInfo} from 'react-native';
import {GET, POST, PUT, DELETE} from './constants';

let isOnline = false;
const handleConnectivityChange = online => {
  isOnline = online;
};

NetInfo.addEventListener('change', handleConnectivityChange);

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

export default request => {
  if (isOnline) {
    console.log('Online');
    return executeRequest(request);
  }

  console.log('Offline');
  return Promise.reject();
};
