import { RootState } from '../root-reducers';
import { createSelector } from 'reselect';

const selectCategoriesState = (state: RootState) => state.categoriesStore;

export const selectCategories = createSelector([selectCategoriesState], (state) => state.categories);
