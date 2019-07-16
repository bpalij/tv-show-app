import { START_LOAD_DATA, LOADED_DATA, CHANGED_PARAMS } from './actionTypes';

export const startLoadData = () => ({
  type: START_LOAD_DATA,
});

export const loadedData = (data, headers, images) => ({
  type: LOADED_DATA,
  data: {
    data,
    headers,
    images,
  },
});

export const changeParams = params => ({
  type: CHANGED_PARAMS,
  data: params,
});
