import { RootState } from '../root-reducers';
import { createSelector } from 'reselect';

const selectArticlesState = (state: RootState) => state.articlesStore;

export const selectArticles = createSelector([selectArticlesState], (state) => state.articles);

export const selectArticle = createSelector([selectArticlesState], (state) => state.article);
