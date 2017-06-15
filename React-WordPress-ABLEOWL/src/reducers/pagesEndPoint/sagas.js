import { put, call, takeLatest } from 'redux-saga/effects';

import {
  GET_PAGES,
} from './constants';

import {
  loadPages,
} from './api';

import {
  setPages,
  currentPage,
} from './actions';

function* asyncLoadPages() {
  const response = yield call(loadPages);
  yield put(setPages(response));
  console.log('response', response);
}

export function* getPages() {
  yield takeLatest(GET_PAGES, asyncLoadPages);
}

export default [
  getPages(),
];
