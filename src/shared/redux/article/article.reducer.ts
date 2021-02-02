import { IArticle } from '../../types';
import { ArticleAction, ArticleActionTypes } from './article.actions';

export interface ArticleState {
  article: IArticle | null;
  error?: any;
}

const defaultState: ArticleState = {
  article: null,
};

export const articleReducer = (state: ArticleState = defaultState, action: ArticleAction<any>): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
      };
    case ArticleActionTypes.FETCH_ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
