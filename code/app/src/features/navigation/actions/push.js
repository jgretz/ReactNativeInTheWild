export const PUSH = 'PUSH';

export const push = (routeName, params) =>
({
  type: PUSH,
  payload: {routeName, params},
});
