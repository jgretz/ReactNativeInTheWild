import _ from 'lodash';

/* eslint-disable */
const doLog = args => {
  const message = _.map(args, a => a instanceof Error ? a.stack : a).join(' ');
  console.log(message);
};

export const log = function() { doLog(arguments); };
export const logWarning = function() { doLog(arguments); };
export const logError = function() { doLog(arguments); };
