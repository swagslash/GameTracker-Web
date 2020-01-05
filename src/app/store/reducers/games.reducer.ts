import {Game} from '../model';
import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {
  filterUserGames,
  loadUserGames,
  loadUserGamesError,
  loadUserGamesSuccess,
  unload
} from '../actions/games.actions';

export interface GamesState {
  userGames: UserGamesState;
  fetchGames: FetchGamesState;
}

export interface UserGamesState {
  games: Game[];
  filters: string[];
  loading: boolean;
  error?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface FetchGamesState {
  // TODO: implement when fetching games
}

export const initialUserGamesState: UserGamesState = {
  games: [],
  filters: [],
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
  on(filterUserGames, (state, { filters }) => ({
    ...state,
    userGames: {
      ...state.userGames,
      filters,
    },
  })),
  on(loadUserGamesSuccess, (state, { games }) => ({
    ...state,
    userGames: {
      ...state.userGames,
      games,
      loading: false,
      error: undefined,
    },
  })),
  on(loadUserGamesError, (state, { error }) => ({
    ...state,
    userGames: {
      ...state.userGames,
      loading: false,
      error,
    },
  })),
  on(unload, () => ({
    ...initialGamesState,
  })),
);

export const reducer: ActionReducer<GamesState, Action> = (state: GamesState | undefined, action: Action) => {
  return gamesReducer(state, action);
};
