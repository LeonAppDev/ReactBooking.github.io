import { combineReducers } from 'redux-immutable';
import pagesReducer from 'reducers/pagesEndPoint/reducer';
import postsReducer from 'reducers/postsEndpoint/reducer';

export default function createReducer() {
  return combineReducers({
    pages: pagesReducer,
    posts: postsReducer,
  });
}
