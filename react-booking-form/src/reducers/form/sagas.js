import { put, takeLatest } from 'redux-saga/effects';

import {
  GET_END_DATE,
  GET_START_DATE,
} from './constants';

import {
  handleSetEndDate,
  handleSetStartDate,
} from './actions';

function* asyncGetStartDate(action) {
  yield put(handleSetStartDate(action.payload.minDate));
}

function* asyncGetEndDate(action) {
  yield put(handleSetEndDate(action.payload.maxDate));
}

export function* getStartDate() {
  yield takeLatest(GET_START_DATE, asyncGetStartDate);
}

export function* getEndDate() {
  yield takeLatest(GET_END_DATE, asyncGetEndDate);
}

export default [
  getStartDate(),
  getEndDate(),
];
