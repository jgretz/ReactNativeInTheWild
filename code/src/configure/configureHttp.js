import {configureHttp} from '../util/http';

const DEFAULT_CONFIG = {
  baseURL: 'http://api.forismatic.com/api/1.0/',
};

export default store => // eslint-disable-line
  configureHttp(() => DEFAULT_CONFIG);
