import { createAction } from 'redux-actions';
import {
  LOAD_POSTS,
  SET_POSTS,
  CURRENT_POST,
} from './constants';

export const loadPosts = createAction(
  LOAD_POSTS,
);

export const setPosts = createAction(
  SET_POSTS,
);

export const currentPost = createAction(
  CURRENT_POST,
);
