import { combineReducers } from 'redux-immutable';
import formReducer from 'reducers/form/reducer';

export default function createReducer() {
  return combineReducers({
    form: formReducer,
  });
}
