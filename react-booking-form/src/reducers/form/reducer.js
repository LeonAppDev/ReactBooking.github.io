import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  SET_END_DATE,
  SET_STAET_DATE,
} from './constants';

const initialState = fromJS({
  startDate: null,
  endDate: null,
});

export default handleActions({
  [SET_STAET_DATE]: (state, action) =>
    state.set('startDate', fromJS(action.payload)),
  [SET_END_DATE]: (state, action) =>
    state.set('endDate', fromJS(action.payload)),
}, initialState);
