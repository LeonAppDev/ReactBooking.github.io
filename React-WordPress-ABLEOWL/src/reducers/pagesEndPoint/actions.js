import { createAction } from 'redux-actions';
import {
  GET_PAGES,
  SET_PAGES,
  CURRENT_PAGE,
} from './constants';

export const getPages = createAction(
  GET_PAGES,
);

export const setPages = createAction(
  SET_PAGES,
);

export const currentPage = createAction(
  CURRENT_PAGE,
);
