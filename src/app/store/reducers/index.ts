import {ActionReducerMap} from '@ngrx/store';
import {AuthState, reducer as authReducer} from './auth.reducer';
import {GamesState, reducer as gamesReducer} from './games.reducer';
import {TokenState, reducer as tokenReducer} from './token.reducer';

export interface State {
  auth: AuthState;
  games: GamesState;
  token: TokenState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  games: gamesReducer,
  token: tokenReducer,
};
