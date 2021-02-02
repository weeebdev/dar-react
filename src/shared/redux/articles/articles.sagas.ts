import { takeLatest, call, all, put } from 'redux-saga/effects';
import { getArticles } from '../../api';
import { fetchArticlesSuccess, fetchArticlesError, ArticlesActionTypes, ArticlesAction } from './articles.actions';

export function* fetchArticlesAsync(action: ArticlesAction<string>) {
  try {
    const res = yield call(getArticles, action.payload);
    yield put(fetchArticlesSuccess(res.data));
  } catch (error) {
    yield put(fetchArticlesError(error));
  }
}

export function* fetchArticlesSaga() {
  yield takeLatest(ArticlesActionTypes.FETCH_ARTICLES, fetchArticlesAsync);
}

export function* articlesSagas() {
  yield all([call(fetchArticlesSaga)]);
}
