import {gamesDataMocks} from '../testing';
import {
  fetchedGames,
  fetchGamesError,
  fetchGamesLoading,
  searchTerm,
  userGames,
  userGamesError,
  userGamesLoading
} from './games.selector';

describe('GamesSelector', () => {
  describe('user games', () => {
    it('should select the games', () => {
      expect(userGames.projector(gamesDataMocks.userGamesState)).toBe(gamesDataMocks.userGamesState.userGames.games);
    });

    it('should select the games filtered', () => {
      expect(userGames.projector(gamesDataMocks.userGamesFilterState))
      .toEqual([gamesDataMocks.userGamesState.userGames.games[1]]);
    });

    it('should select the loading state', () => {
      expect(userGamesLoading.projector(gamesDataMocks.userGamesLoadingState))
        .toBe(gamesDataMocks.userGamesLoadingState.userGames.loading);
    });

    it('should select the error state', () => {
      expect(userGamesError.projector(gamesDataMocks.userGamesErrorState))
        .toBe(gamesDataMocks.userGamesErrorState.userGames.error);
    });
  });

  describe('fetch games', () => {
    it('should select the search term', () => {
      expect(searchTerm.projector(gamesDataMocks.fetchedGamesState))
        .toBe(gamesDataMocks.fetchedGamesState.fetchGames.searchTerm);
    });

    it('should select the fetched games', () => {
      expect(fetchedGames.projector(gamesDataMocks.fetchedGamesState))
        .toBe(gamesDataMocks.fetchedGamesState.fetchGames.games);
    });

    it('should select the loading state', () => {
      expect(fetchGamesLoading.projector(gamesDataMocks.fetchedGamesLoadingState))
        .toBe(gamesDataMocks.fetchedGamesLoadingState.fetchGames.loading);
    });

    it('should select the error state', () => {
      expect(fetchGamesError.projector(gamesDataMocks.fetchedGamesErrorState))
        .toBe(gamesDataMocks.fetchedGamesErrorState.fetchGames.error);
    });
  });
});
