import { createAction } from 'redux-actions';
import {
  GET_START_DATE,
  SET_STAET_DATE,
  GET_END_DATE,
  SET_END_DATE,
} from './constants';

export const handleSetStartDate = createAction(
  SET_STAET_DATE,
);
export const handleGetStartDate = createAction(
  GET_START_DATE,
  minDate => ({ minDate }),
);
export const handleSetEndDate = createAction(
  SET_END_DATE,
);
export const handleGetEndDate = createAction(
  GET_END_DATE,
  maxDate => ({ maxDate }),
);
