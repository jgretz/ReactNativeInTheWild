import generateIndexFiles from './generateIndexFile';

generateIndexFiles({
  searchPath: '../src/features',
  includeTests: [
    /features(?:\/|\\).+?(?:\/|\\)actions/,
  ],
  formatInput: () => '*',
});
