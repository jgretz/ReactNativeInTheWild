export const RESET = 'RESET';

export const reset = (routeName, params) =>
({
  type: RESET,
  payload: {routeName, params},
});
