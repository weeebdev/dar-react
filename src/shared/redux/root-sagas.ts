import { call, all } from 'redux-saga/effects';
import { articlesSagas } from './articles/articles.sagas';
import { authSagas } from './auth/auth.sagas';
import { categoriesSagas } from './categories/categories.sagas';

export default function* rootSaga() {
  yield all([call(categoriesSagas), call(articlesSagas), call(authSagas)]);
}
