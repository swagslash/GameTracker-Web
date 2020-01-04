import {gamesDataMocks} from '../testing';
import {userGames, userGamesError, userGamesLoading} from "./games.selector";

describe('GamesSelector', () => {
  describe('user games', () => {
    it('should select the games', () => {
      expect(userGames.projector(gamesDataMocks.userGamesState)).toBe(gamesDataMocks.userGamesState.userGames.games);
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
    // TODO: implement
  });
});
