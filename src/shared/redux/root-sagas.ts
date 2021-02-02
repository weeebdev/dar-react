import { call, all } from 'redux-saga/effects';
import { articleSagas } from './article/article.sagas';
import { articlesSagas } from './articles/articles.sagas';
import { categoriesSagas } from './categories/categories.sagas';

export default function* rootSaga() {
  yield all([call(categoriesSagas), call(articlesSagas), call(articleSagas)]);
}
