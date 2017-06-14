import { put, call, takeLatest } from 'redux-saga/effects';

import {
  LOAD_PAGES,
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
}

export function* getPages() {
  yield takeLatest(LOAD_PAGES, asyncLoadPages);
}

export default [
  getPages(),
];
