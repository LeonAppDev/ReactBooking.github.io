import { combineReducers } from 'redux-immutable';
import pagesReducer from 'reducers/pagesEndPoint';

export default function createReducer() {
  return combineReducers({
    pages: pagesReducer,
  });
}
