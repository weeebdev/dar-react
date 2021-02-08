import { combineReducers } from 'redux';
import { articlesReducer } from './articles/articles.reducer';
import { authReducer } from './auth/auth.reducer';
import { categoriesReducer } from './categories/categories.reducer';

const rootReducers = combineReducers({
  categoriesStore: categoriesReducer,
  articlesStore: articlesReducer,
  authStore: authReducer,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
