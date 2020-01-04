import {ActionReducerMap} from '@ngrx/store';
import {AuthState, reducer as authReducer} from './auth.reducer';
import {GamesState, reducer as gamesReducer} from "./games.reducer";

export interface State {
  auth: AuthState;
  games: GamesState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  games: gamesReducer,
};
