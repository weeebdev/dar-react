import { ICategory } from '../../types';
import { CategoriesAction, CategoriesActionTypes } from './categories.actions';

export interface CategoriesState {
  categories: ICategory[];
  error?: any;
}

const defaultState: CategoriesState = {
  categories: [],
};

export const categoriesReducer = (
  state: CategoriesState = defaultState,
  action: CategoriesAction<any>,
): CategoriesState => {
  switch (action.type) {
    case CategoriesActionTypes.SET_CATEGORIES:
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
