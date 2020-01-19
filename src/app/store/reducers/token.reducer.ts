import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {AgentToken} from '../model';
import {loadTokens, tokenError, tokenSuccess, unload, addToken, removeToken} from '../actions/token.actions';

export interface TokenState {
  tokens: Array<AgentToken>;
  loading: boolean;
  error?: string;
}

export const initialTokenState: TokenState = {
  tokens: [],
  loading: false,
  error: undefined,
};

const tokenReducer = createReducer(
  initialTokenState,
  on(loadTokens, addToken, removeToken, (state) => ({
    ...state,
    loading: true,
    error: undefined,
  })),
  on(tokenSuccess, (state, { tokens }) => ({
    ...state,
    tokens,
    loading: false,
    error: undefined,
  })),
  on(tokenError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(unload, () => ({
    ...initialTokenState,
  })),
);

export const reducer: ActionReducer<TokenState> = (state: TokenState | undefined, action: Action) => {
  return tokenReducer(state, action);
};
