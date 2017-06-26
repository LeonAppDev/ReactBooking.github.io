import { put, call, takeLatest } from 'redux-saga/effects';

import {
  GET_PAGES,
} from './constants';

import {
  loadPages,
} from './api';

import {
  setPages,
} from './actions';

function* asyncLoadPages() {
//const response = yield call(loadPages);
  const response = [{ "id": 3133,
        "slug": "casestudies",
        "status": "publish",
        "type": "page",
        "link": "http://test.nzpuretour.com/casestudies/",
        "title": {
            "rendered": "CASE STUDIES"
        }},
        { "id": 3134,
              "slug": "theprocess",
              "status": "publish",
              "type": "page",
              "link": "http://test.nzpuretour.com/theprocess/",
              "title": {
                  "rendered": "THE PROCESS"
              }},
              { "id": 3135,
                    "slug": "theskill",
                    "status": "publish",
                    "type": "page",
                    "link": "http://test.nzpuretour.com/theskill/",
                    "title": {
                        "rendered": "THE SKILL"
                    }},
                    { "id": 3136,
                          "slug": "thecaseforexcel",
                          "status": "publish",
                          "type": "page",
                          "link": "http://test.nzpuretour.com/thecaseforexcel/",
                          "title": {
                              "rendered": "THE CASE FOR EXCEL"
                          }},
                          { "id": 3137,
                                "slug": "contact",
                                "status": "publish",
                                "type": "page",
                                "link": "http://test.nzpuretour.com/contact/",
                                "title": {
                                    "rendered": "CONTACT"
                                }},
                                { "id": 3138,
                                      "slug": "about",
                                      "status": "publish",
                                      "type": "page",
                                      "link": "http://test.nzpuretour.com/about/",
                                      "title": {
                                          "rendered": "ABOUT"
                                      }}   ];
  yield put(setPages(response));
}

export function* getPages() {
  yield takeLatest(GET_PAGES, asyncLoadPages);
}

export default [
  getPages(),
];
