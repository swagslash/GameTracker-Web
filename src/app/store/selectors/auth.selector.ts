import {AuthState} from '../reducers/auth.reducer';
import {createSelector} from '@ngrx/store';
import {State} from '../reducers';

export const getAuthState = (state: State): AuthState => state.auth;

export const authenticatedUser = createSelector(
  getAuthState,
  (state: AuthState) => state.currentUser,
);

export const authenticationLoading = createSelector(
  getAuthState,
  (state: AuthState) => state.loading,
);

export const authenticationError = createSelector(
  getAuthState,
  (state: AuthState) => state.error,
);
