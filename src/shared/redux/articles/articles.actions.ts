import { IArticle } from '../../types';

export interface ArticlesAction<T> {
  type: ArticlesActionTypes;
  payload?: T;
}

export enum ArticlesActionTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
}

export const fetchArticles = (categoryId: string): ArticlesAction<string> => {
  return {
    type: ArticlesActionTypes.FETCH_ARTICLES,
    payload: categoryId,
  };
};

export const fetchArticlesSuccess = (Articles: IArticle[]): ArticlesAction<IArticle[]> => {
  return {
    type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
    payload: Articles,
  };
};

export const fetchArticlesError = (error: any): ArticlesAction<any> => {
  return {
    type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
    payload: error,
  };
};
