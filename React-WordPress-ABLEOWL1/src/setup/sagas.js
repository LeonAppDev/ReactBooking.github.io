import pagesSagas from 'reducers/pagesEndPoint/sagas';
import postsSagas from 'reducers/postsEndpoint/sagas';

export default function* rootSaga() {
  yield [
    ...pagesSagas,
    ...postsSagas,
  ];
}
