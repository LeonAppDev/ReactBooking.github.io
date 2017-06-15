import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  SET_POSTS,
} from './constants';

const initialState = fromJS({
  posts: [],
});

export default handleActions({
  [SET_POSTS]: (state, action) =>
    state.set('posts', fromJS(action.payload)),
  // [CURRENT_POST]: (state, action) =>
  //   state.set('currentPost', fromJS(action.payload)),
}, initialState);
