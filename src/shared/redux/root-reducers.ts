import { combineReducers } from 'redux';
import { articlesReducer } from './articles/articles.reducer';
import { categoriesReducer } from './categories/categories.reducer';

const rootReducers = combineReducers({
  categoriesStore: categoriesReducer,
  articlesStore: articlesReducer,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
