import {GamesState} from "../reducers/games.reducer";
import {State} from "../reducers";
import {createSelector} from "@ngrx/store";

export const getGamesState = (state: State): GamesState => state.games;

export const userGames = createSelector(
  getGamesState,
  (state: GamesState) => state.userGames.games,
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
