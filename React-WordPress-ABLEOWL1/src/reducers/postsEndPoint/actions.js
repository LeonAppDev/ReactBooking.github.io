import { createAction } from 'redux-actions';
import {
  GET_POSTS,
  SET_POSTS,
  CURRENT_POST,
} from './constants';

export const getPosts = createAction(
  GET_POSTS,
);

export const setPosts = createAction(
  SET_POSTS,
);

export const currentPost = createAction(
  CURRENT_POST,
);
