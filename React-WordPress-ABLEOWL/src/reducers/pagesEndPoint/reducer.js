import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  SET_PAGES,
  CURRENT_PAGE,
} from './constants';

const initialState = fromJS({
  pages: [],
  // currentPage: {},
});

export default handleActions({
  [SET_PAGES]: (state, action) =>
    state.set('pages', fromJS(action.payload)),
  // [CURRENT_PAGE]: (state, action) =>
  //   state.set('currentPage', fromJS(action.payload)),
}, initialState);
