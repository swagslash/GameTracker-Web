import {State} from '../reducers';
import {TokenState} from '../reducers/token.reducer';
import {createSelector} from '@ngrx/store';

export const getTokenState = (state: State): TokenState => state.token;

export const tokens = createSelector(
  getTokenState,
  (state: TokenState) => state.tokens,
);

export const tokenLoading = createSelector(
  getTokenState,
  (state: TokenState) => state.loading,
);

export const tokenError = createSelector(
  getTokenState,
  (state: TokenState) => state.error,
);
