import { combineReducers, createStore } from 'redux';
import { START_LOAD_DATA, LOADED_DATA, CHANGED_PARAMS } from './actionTypes';

const disableInput = (state = true, action) => {
  switch (action.type){
    case START_LOAD_DATA:
      return true;
    case LOADED_DATA:
      return false;
    default:
      return state;
  }
}

const data = (state = {}, action) => {
  switch (action.type) {
    case LOADED_DATA:
      return action.data.data;
    default:
      return state;
  }
}

const headers = (state = {}, action) => {
  switch (action.type) {
    case LOADED_DATA:
      return action.data.headers 
    default:
      return state;
  }  
}

const defaultPaginator = {
  page: 1,
  pages: 0,
  disableFirst: true,
  disableLast: true,
}

const paginator = (state = defaultPaginator, action) => {
  switch (action.type) {
    case LOADED_DATA:
      const headerPage = action.data.headers['x-pagination-page'];
      const headerPages = action.data.headers['x-pagination-page-count'];
      return {
        page: headerPage || 1,
        pages: headerPages || 0,
        disableFirst: !!(typeof(headerPage)!=='number' || headerPage<=1),
        disableLast: !!(typeof(headerPages)!=='number' || headerPage>=headerPages),
      };
    case CHANGED_PARAMS:
      return { ...defaultPaginator };
    default:
      return state;
  }
}

// TODO add reducer for filters

const store = createStore(combineReducers({
  disableInput,
  data,
  headers,
  paginator,
}));
export default store;