import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  SET_POSTS,
  CURRENT_POST,
} from './constants';

const initialState = fromJS({
  posts: [],
  currentPost: {},
});

export default handleActions({
  [SET_POSTS]: (state, action) =>
    state.set('posts', fromJS(action.payload)),
  [CURRENT_POST]: (state, action) =>
    state.set('currentPost', fromJS(action.payload)),
})
