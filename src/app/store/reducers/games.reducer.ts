import {Game} from "../model";
import {Action, ActionReducer, createReducer, on} from "@ngrx/store";
import {loadUserGames, loadUserGamesError, loadUserGamesSuccess, unload} from "../actions/games.actions";

export interface GamesState {
  userGames: UserGamesState;
  fetchGames: FetchGamesState;
}

export interface UserGamesState {
  games: Array<Game>;
  loading: boolean;
  error?: string;
}

export interface FetchGamesState {
  // TODO: implement when fetching games
}

export const initialUserGamesState: UserGamesState = {
  games: [],
  loading: false,
  error: undefined,
};

export const initialFetchGamesState: FetchGamesState = {
  // TODO: define initial state
};

export const initialGamesState: GamesState = {
  userGames: initialUserGamesState,
  fetchGames: initialFetchGamesState,
};

const gamesReducer = createReducer(
  initialGamesState,
  on(loadUserGames, (state) => ({
    ...state,
    userGames: {
      ...state.userGames,
      loading: true,
      error: undefined,
    },
  })),
  on(loadUserGamesSuccess, (state, { games }) => ({
    ...state,
    userGames: {
      games,
      loading: false,
      error: undefined,
    },
  })),
  on(loadUserGamesError, (state, { error }) => ({
    ...state,
    userGames: {
      games: [],
      loading: false,
      error,
    },
  })),
  on(unload, () => ({
    ...initialGamesState,
  })),
);

export const reducer: ActionReducer<GamesState, Action> = (state: GamesState | undefined, action: Action) => {
  return gamesReducer(state, action)
};
