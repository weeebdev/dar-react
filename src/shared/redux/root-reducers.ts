import { combineReducers } from 'redux';
import { articleReducer } from './article/article.reducer';
import { articlesReducer } from './articles/articles.reducer';
import { categoriesReducer } from './categories/categories.reducer';

const rootReducers = combineReducers({
  categoriesStore: categoriesReducer,
  articlesStore: articlesReducer,
  articleStore: articleReducer,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
