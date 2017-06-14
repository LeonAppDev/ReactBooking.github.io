import { createAction } from 'redux-actions';
import {
  LOAD_PAGES,
  SET_PAGES,
  CURRENT_PAGE,
} from './constants';

export const loadPages = createAction(
  LOAD_PAGES,
);

export const setPages = createAction(
  SET_PAGES,
);

export const currentPage = createAction(
  CURRENT_PAGE,
);
