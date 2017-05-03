import generateIndexFiles from './generateIndexFile';

generateIndexFiles({
  searchPath: '../src/features',
  includeTests: [
    /features(?:\/|\\).+?(?:\/|\\)services$/,
  ],
  formatInput: fileName => `{default as ${fileName}}`,
});
