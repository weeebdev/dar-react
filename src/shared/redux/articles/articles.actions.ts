import { IArticle } from '../../types';
import {
  ArticlesActionTypes,
  FetchArticleAction,
  FetchArticleErrorAction,
  FetchArticlesAction,
  FetchArticlesErrorAction,
  FetchArticlesSuccessAction,
  FetchArticleSuccessAction,
} from './articles.types';

export const fetchArticles = (params: { categoryId: string }): FetchArticlesAction => {
  return {
    type: ArticlesActionTypes.FETCH_ARTICLES,
    payload: params,
  };
};

export const fetchArticlesSuccess = (articles: IArticle[]): FetchArticlesSuccessAction => {
  return {
    type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
    payload: articles,
  };
};

export const fetchArticlesError = (error: string): FetchArticlesErrorAction => {
  return {
    type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
    payload: error,
  };
};

export const fetchArticle = (params: { articleId: string }): FetchArticleAction => {
  return {
    type: ArticlesActionTypes.FETCH_ARTICLE,
    payload: params,
  };
};

export const fetchArticleSuccess = (article: IArticle): FetchArticleSuccessAction => {
  return {
    type: ArticlesActionTypes.FETCH_ARTICLE_SUCCESS,
    payload: article,
  };
};

export const fetchArticleError = (error: string): FetchArticleErrorAction => {
  return {
    type: ArticlesActionTypes.FETCH_ARTICLE_ERROR,
    payload: error,
  };
};
