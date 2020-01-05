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

export const userGamesLoading = createSelector(
  getGamesState,
  (state: GamesState) => state.userGames.loading,
);

export const userGamesError = createSelector(
  getGamesState,
  (state: GamesState) => state.userGames.error,
);

// TODO: define selectors fro fetching games
