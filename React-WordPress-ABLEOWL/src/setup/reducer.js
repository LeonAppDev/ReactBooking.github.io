import { combineReducers } from 'redux-immutable';
import pagesReducer from 'reducers/pagesEndPoint/reducer';

export default function createReducer() {
  return combineReducers({
    pages: pagesReducer,
  });
}
