import { combinReducers } from 'redux-immutable';
import formReducer from 'reducers/form/reducer';

export default function createReducer() {
  return combinReducers({
    form: formReducer,
  });
}
