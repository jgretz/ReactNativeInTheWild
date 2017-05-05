let persistor = null;

export const storePersistor = p => {
  persistor = p;
};

export const purge = keys => {
  persistor.purge(keys);
};

export const pause = () => {
  persistor.pause();
};

export const resume = () => {
  persistor.resume();
};
