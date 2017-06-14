import pagesSagas from 'reducers/pagesEndPoint/sagas';

export default function* rootSaga() {
  yield [
    ...pagesSagas,
  ];
}
