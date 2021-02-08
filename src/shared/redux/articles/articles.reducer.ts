import { IArticle } from '../../types';
import { ArticlesAction, ArticlesActionTypes } from './articles.types';
export interface ArticlesState {
  articles: IArticle[];
  article: IArticle | null;
  error: string;
}

const defaultState: ArticlesState = {
  articles: [],
  article: null,
  error: '',
};

export const articlesReducer = (state: ArticlesState = defaultState, action: ArticlesAction): ArticlesState => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };
    case ArticlesActionTypes.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
      };
    case ArticlesActionTypes.FETCH_ARTICLE_ERROR:
    case ArticlesActionTypes.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
