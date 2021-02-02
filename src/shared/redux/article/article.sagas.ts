import { takeLatest, call, all, put } from 'redux-saga/effects';
import { getArticle } from '../../api';
import { ArticleAction, fetchArticleSuccess, fetchArticleError, ArticleActionTypes } from './article.actions';

export function* fetchArticleAsync(action: ArticleAction<string>) {
  try {
    const res = yield call(getArticle, action.payload!);
    yield put(fetchArticleSuccess(res.data));
  } catch (error) {
    yield put(fetchArticleError(error));
  }
}

export function* fetchArticleSaga() {
  yield takeLatest(ArticleActionTypes.FETCH_ARTICLE, fetchArticleAsync);
}

export function* articleSagas() {
  yield all([call(fetchArticleSaga)]);
}
