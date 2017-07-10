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
  const response = [

    { "id": 3133,
          "slug": "home",
          "status": "publish",
          "type": "page",
          "link": "http://test.nzpuretour.com/home/",
          "title": {
              "rendered": "HOME"
          }},
         { "id": 3133,
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
                          "slug": "theexceladvantage",
                          "status": "publish",
                          "type": "page",
                          "link": "http://test.nzpuretour.com/theexceladvantage/",
                          "title": {
                              "rendered": "THE EXCEL ADVANTAGE"
                          }},
                          { "id": 3136,
                                "slug": "journal",
                                "status": "publish",
                                "type": "page",
                                "link": "http://test.nzpuretour.com/journal/",
                                "title": {
                                    "rendered": "JOURNAL"
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
