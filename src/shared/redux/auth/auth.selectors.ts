import { createSelector } from 'reselect';
import { RootState } from '../root-reducers';

const selectAuthState = (state: RootState) => state.authStore;

export const selectProfile = createSelector([selectAuthState], (state) => state.profile);

export const selectLoginError = createSelector([selectAuthState], (state) => state.loginError);

export const selectLoading = createSelector([selectAuthState], (state) => state.loading);
