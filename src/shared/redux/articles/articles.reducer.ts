import { IArticle } from '../../types';
import { ArticlesAction, ArticlesActionTypes } from './articles.actions';

export interface ArticlesState {
  articles: IArticle[];
  error?: any;
}

const defaultState: ArticlesState = {
  articles: [],
};

export const articlesReducer = (state: ArticlesState = defaultState, action: ArticlesAction<any>): ArticlesState => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };
    case ArticlesActionTypes.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
