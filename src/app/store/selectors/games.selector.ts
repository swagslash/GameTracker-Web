import {GamesState} from '../reducers/games.reducer';
import {State} from '../reducers';
import {createSelector} from '@ngrx/store';
import {filterGames} from './games-filter';

export const getGamesState = (state: State): GamesState => state.games;

export const userGames = createSelector(
  getGamesState,
  (state: GamesState) => {
    return filterGames(state.userGames.games, state.userGames.filters);
  },
);

export const userGamesFilter = createSelector(
  getGamesState,
  (state: GamesState) => state.userGames.filters,
);

export const userGamesLoading = createSelector(
  getGamesState,
  (state: GamesState) => state.userGames.loading,
);

export const userGamesError = createSelector(
  getGamesState,
  (state: GamesState) => state.userGames.error,
);

export const searchTerm = createSelector(
  getGamesState,
  (state: GamesState) => state.fetchGames.searchTerm,
);

export const fetchedGames = createSelector(
  getGamesState,
  (state: GamesState) => state.fetchGames.games,
);

export const fetchGamesLoading = createSelector(
  getGamesState,
  (state: GamesState) => state.fetchGames.loading,
);

export const fetchGamesError = createSelector(
  getGamesState,
  (state: GamesState) => state.fetchGames.error,
);
