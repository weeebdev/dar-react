import { IArticle } from '../../types';

export enum ArticlesActionTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
  FETCH_ARTICLE = 'FETCH_ARTICLE',
  FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR',
}

export interface FetchArticlesAction {
  type: ArticlesActionTypes.FETCH_ARTICLES;
  payload: {
    categoryId?: string;
    page?: number;
  };
}

export interface FetchArticlesSuccessAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS;
  payload: IArticle[];
}

export interface FetchArticlesErrorAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_ERROR;
  payload: string;
}

export interface FetchArticleAction {
  type: ArticlesActionTypes.FETCH_ARTICLE;
  payload: {
    articleId: string;
  };
}

export interface FetchArticleSuccessAction {
  type: ArticlesActionTypes.FETCH_ARTICLE_SUCCESS;
  payload: IArticle;
}

export interface FetchArticleErrorAction {
  type: ArticlesActionTypes.FETCH_ARTICLE_ERROR;
  payload: string;
}

export type ArticlesAction =
  | FetchArticlesAction
  | FetchArticlesSuccessAction
  | FetchArticlesErrorAction
  | FetchArticleAction
  | FetchArticleSuccessAction
  | FetchArticleErrorAction;
