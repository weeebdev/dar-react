import { takeLatest, call, all, put } from 'redux-saga/effects';
import { getArticle, getArticles } from '../../api';
import { fetchArticlesSuccess, fetchArticlesError, fetchArticleError, fetchArticleSuccess } from './articles.actions';
import { ArticlesAction, ArticlesActionTypes } from './articles.types';

export function* fetchArticlesAsync(action: ArticlesAction) {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_ARTICLES:
      try {
        const res = yield getArticles(action.payload.categoryId);
        yield put(fetchArticlesSuccess(res.data));
      } catch (error) {
        yield put(fetchArticlesError(error.message));
      }
      break;
    case ArticlesActionTypes.FETCH_ARTICLE:
      try {
        const res = yield getArticle(action.payload.articleId);
        yield put(fetchArticleSuccess(res.data));
      } catch (error) {
        yield put(fetchArticleError(error.message));
      }
      break;
  }
}

export function* fetchArticlesSaga() {
  yield takeLatest(ArticlesActionTypes.FETCH_ARTICLES, fetchArticlesAsync);
}

export function* fetchArticleSaga() {
  yield takeLatest(ArticlesActionTypes.FETCH_ARTICLE, fetchArticlesAsync);
}

export function* articlesSagas() {
  yield all([call(fetchArticlesSaga), call(fetchArticleSaga)]);
}
