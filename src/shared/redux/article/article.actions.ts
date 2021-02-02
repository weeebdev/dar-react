import { IArticle } from '../../types';

export interface ArticleAction<T> {
  type: ArticleActionTypes;
  payload?: T;
}

export enum ArticleActionTypes {
  FETCH_ARTICLE = 'FETCH_ARTICLE',
  FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR',
}

export const fetchArticle = (articleId: string): ArticleAction<string> => {
  return {
    type: ArticleActionTypes.FETCH_ARTICLE,
    payload: articleId,
  };
};

export const fetchArticleSuccess = (Article: IArticle): ArticleAction<IArticle> => {
  return {
    type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
    payload: Article,
  };
};

export const fetchArticleError = (error: any): ArticleAction<any> => {
  return {
    type: ArticleActionTypes.FETCH_ARTICLE_ERROR,
    payload: error,
  };
};
