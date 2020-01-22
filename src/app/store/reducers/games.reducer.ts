import {Game} from '../model';
import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {
  addGames,
  addGamesError,
  addGamesSuccess,
  fetchGames,
  fetchGamesError,
  fetchGamesSuccess,
  filterUserGames,
  getCommonGames,
  getCommonGamesError,
  getCommonGamesSuccess,
  loadUserGames,
  loadUserGamesError,
  loadUserGamesSuccess,
  unload
} from '../actions/games.actions';

export interface GamesState {
  userGames: UserGamesState;
  fetchGames: FetchGamesState;
  commonGames?: CommonGamesState;
}

export interface UserGamesState {
  games: Game[];
  filters: string[];
  loading: boolean;
  error?: string;
}

export interface FetchGamesState {
  searchTerm: string;
  games: Game[] | undefined;
  loading: boolean;
  error: string | undefined;
}

export interface CommonGamesState {
  otherUsers: string[];
  games: Game[] | undefined;
  loading: boolean;
  error: string | undefined;
}

export const initialUserGamesState: UserGamesState = {
  games: [],
  filters: [],
  loading: false,
  error: undefined,
};

export const initialFetchGamesState: FetchGamesState = {
  searchTerm: '',
  games: undefined,
  loading: false,
  error: undefined,
};

export const initialCommonGamesState: CommonGamesState = {
  otherUsers: [],
  games: [],
  loading: false,
  error: undefined,
};

export const initialGamesState: GamesState = {
  userGames: initialUserGamesState,
  fetchGames: initialFetchGamesState,
  commonGames: initialCommonGamesState,
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
  on(fetchGames, (state, { searchTerm }) => ({
    ...state,
    fetchGames: {
      ...state.fetchGames,
      searchTerm,
      loading: true,
      error: undefined,
    },
  })),
  on(fetchGamesSuccess, (state, { games }) => ({
    ...state,
    fetchGames: {
      ...state.fetchGames,
      games,
      loading: false,
      error: undefined,
    },
  })),
  on(fetchGamesError, (state, { error }) => ({
    ...state,
    fetchGames: {
      ...state.fetchGames,
      loading: false,
      error,
    },
  })),
  on(addGames, (state) => ({
    ...state,
    fetchGames: {
      ...state.fetchGames,
      loading: true,
      error: undefined,
    },
  })),
  on(addGamesSuccess, (state, { games }) => ({
    ...state,
    userGames: {
      ...state.userGames,
      games, // TODO Could be improved by only adding new added games
    },
    fetchGames: {
      ...state.fetchGames,
      // games: undefined,
      loading: false,
      error: undefined,
    },
  })),
  on(addGamesError, (state, { error }) => ({
    ...state,
    fetchGames: {
      ...state.fetchGames,
      loading: false,
      error,
    }
  })),
  on(getCommonGames, (state, { otherUsers }) => ({
    ...state,
    commonGames: {
      ...state.commonGames,
      otherUsers,
      loading: true,
    },
  })),
  on(getCommonGamesSuccess, (state, { commonGames}) => ({
    ...state,
    commonGames: {
      ...state.commonGames,
      loading: false,
      error: '',
      games: commonGames,
    }
  })),
  on(getCommonGamesError, (state, { error }) => ({
    ...state,
    commonGames: {
      ...state.commonGames,
      loading: false,
      error,
    }
  })),
  on(unload, () => ({
    ...initialGamesState,
  })),
);

export const reducer: ActionReducer<GamesState, Action> = (state: GamesState | undefined, action: Action) => {
  return gamesReducer(state, action);
};
