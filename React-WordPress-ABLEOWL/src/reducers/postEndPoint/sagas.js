import { put, call, takeLatest } from 'redux-saga/effects';

import {
  LOAD_POSTS,
} from './constants';

import {
  loadPosts,
} from '.api';

import {
  setPosts,
  currentPost,
} from './actions';

function* asyncLoadPosts() {
  const response = yield call(loadPosts);
  yield put(setPages(response));
}

export function* getPosts() {
  yield takeLatest(LOAD_POSTS, asyncLoadPosts);
}

export default [
  getPosts(),
];
