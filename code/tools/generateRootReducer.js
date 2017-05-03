/* eslint-disable no-console */
import _ from 'lodash';
import dir from 'node-dir';
import fs from 'fs';
import path from 'path';

dir.subdirs(path.resolve(__dirname, '../src/features'), (err1, directoryPaths) => {
  if (err1) throw err1;

  const features = _.reduce(directoryPaths, (result, directoryPath) => {
    const matches = directoryPath.match(/features(?:\/|\\)(.+?)(?:\/|\\)reducers$/);
    if (!matches) return result;

    return [...result, matches[1]];
  }, []);
  features.sort();

  const rootReducerContents = [
    '/* eslint-disable sort-imports */',
    'import {combineReducers} from \'redux\';',
    'import {reducer as formReducer} from \'redux-form\';',
    ...features.map(feature => `import ${feature} from './features/${feature}/reducers';`),

    '\nconst rootReducer = combineReducers({',
    '  features: combineReducers({',
    ...features.map(feature => `    ${feature},`),
    '  }),',
    '  form: formReducer,',
    '});\n',

    'export default rootReducer;\n',
  ].join('\n');

  fs.writeFile(path.resolve(__dirname, '../src/rootReducer.js'), rootReducerContents, err2 => {
    if (err2) throw err2;
  });
});
