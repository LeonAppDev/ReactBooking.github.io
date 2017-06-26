import formSagas from 'reducers/form/sagas';

export default function* rootSaga() {
  yield [
    ...formSagas,
  ];
}
