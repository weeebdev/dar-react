import { RootState } from '../root-reducers';
import { createSelector } from 'reselect';

const selectArticleState = (state: RootState) => state.articleStore;

export const selectArticle = createSelector([selectArticleState], (state) => state.article);
