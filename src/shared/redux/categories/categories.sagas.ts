import { takeLatest, call, all, put } from 'redux-saga/effects';
import { getCategories } from '../../api';
import { CategoriesActionTypes, fetchCategoriesError, fetchCategoriesSuccess } from './categories.actions';

export function* fetchCategoriesAsync() {
  try {
    const res = yield call(getCategories);
    yield put(fetchCategoriesSuccess(res.data));
  } catch (error) {
    yield put(fetchCategoriesError(error));
  }
}

export function* fetchCategoriesSaga() {
  yield takeLatest(CategoriesActionTypes.FETCH_CATEGORIES, fetchCategoriesAsync);
}

export function* categoriesSagas() {
  yield all([call(fetchCategoriesSaga)]);
}
