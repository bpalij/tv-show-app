import { START_LOAD_DATA, LOADED_DATA, CHANGED_PARAMS } from './actionTypes';

export const startLoadData = () => {
  return {
    type: START_LOAD_DATA,
  }
}

export const loadedData = (data, headers) => {
  return {
    type: LOADED_DATA,
    data: {
      data,
      headers,
    }
  }
}

export const changeParams = (params) => {
  return {
    type: CHANGED_PARAMS,
    data: params,
  }
}