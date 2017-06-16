import { put, call, takeLatest } from 'redux-saga/effects';

import {
  GET_POSTS,
} from './constants';

import {
  loadPosts,
} from './api';

import {
  setPosts,
} from './actions';

function* asyncLoadPosts() {
  const response = yield call(loadPosts);
  yield put(setPosts(response));
  console.log('response', response);
}

export function* getPosts() {
  yield takeLatest(GET_POSTS, asyncLoadPosts);
}

export default [
  getPosts(),
];
