import {AuthResponseData} from '../model';
import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {authenticationSuccess, authenticationFailure, login, signUp, unload, autoLogin} from '../actions/auth.actions';

export interface AuthState {
  currentUser: AuthResponseData | undefined;
  loading: boolean;
  error?: string;
}

export const initialUserState: AuthState = {
  currentUser: undefined,
  loading: false,
  error: undefined,
};

const authReducer = createReducer(
  initialUserState,
  on(autoLogin, login, signUp, (state) => ({
    ...state,
    loading: true,
    error: undefined,
  })),
  on(authenticationSuccess, (state, { response }) => ({
    ...state,
    currentUser: response,
    loading: false,
    error: undefined,
  })),
  on(authenticationFailure, (state, { error }) => ({
    ...state,
    currentUser: undefined,
    loading: false,
    error,
  })),
  on(unload, () => ({
    ...initialUserState,
  })),
);

export const reducer: ActionReducer<AuthState, Action> = (state: AuthState | undefined, action: Action) => {
  return authReducer(state, action);
};
