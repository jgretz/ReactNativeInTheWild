import {configureHttp} from '../util/http';

const DEFAULT_CONFIG = {
  baseURL: 'http://localhost:4002/api',
};

export default store => // eslint-disable-line
  configureHttp(() => DEFAULT_CONFIG);
