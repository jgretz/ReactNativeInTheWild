import generateIndexFiles from './generateIndexFile';

generateIndexFiles({
  searchPath: '../src',
  includeTests: [
    /util/,
  ],
  formatInput: () => '*',
});
