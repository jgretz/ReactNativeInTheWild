import generateIndexFiles from './generateIndexFile';

generateIndexFiles({
  searchPath: '../src/features',
  includeTests: [
    /features(?:\/|\\).+?(?:\/|\\)selectors/,
  ],
  formatInput: fileName => `{default as ${fileName}}`,
});
