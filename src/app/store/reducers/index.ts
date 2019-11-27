import {ActionReducerMap} from '@ngrx/store';
import {AuthState, reducer as authReducer} from './auth.reducer';

export interface State {
  auth: AuthState,
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
};
