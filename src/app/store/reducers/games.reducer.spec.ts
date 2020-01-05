import {
  filterUserGames,
  loadUserGames,
  loadUserGamesError,
  loadUserGamesSuccess,
  unload
} from '../actions/games.actions';
import {reducer} from './games.reducer';
import {gamesDataMocks} from '../testing';

describe('GamesReducer', () => {
  it('should unload the state', () => {
    // given
    const action = unload();

    // when
    const newState = reducer(gamesDataMocks.userGamesState, action);

    // then
    expect(newState)
      .toEqual(gamesDataMocks.initialState);
  });

  describe('user games', () => {
    it('should set loading to true', () => {
      // given
      const userId = 'ID';
      const action = loadUserGames({ userId });

      // when
      const newState = reducer(gamesDataMocks.initialState, action);

      // then
      expect(newState)
        .toEqual({
          ...gamesDataMocks.initialState,
          userGames: {
            ...gamesDataMocks.initialState.userGames,
            loading: true,
          },
        });
    });

    it('should set the games', () => {
      // given
      const action = loadUserGamesSuccess({ games: gamesDataMocks.games });

      // when
      const newState = reducer(gamesDataMocks.initialState, action);

      // then
      expect(newState)
        .toEqual({
          ...gamesDataMocks.initialState,
          userGames: {
            ...gamesDataMocks.initialState.userGames,
            games: gamesDataMocks.games,
          },
        });
    });

    it('should set the filters', () => {
      // given
      const action = filterUserGames({ filters: gamesDataMocks.userGamesFilterState.userGames.filters });

      // when
      const newState = reducer(gamesDataMocks.initialState, action);

      // then
      expect(newState)
        .toEqual({
          ...gamesDataMocks.initialState,
          userGames: {
            ...gamesDataMocks.initialState.userGames,
            filters: gamesDataMocks.userGamesFilterState.userGames.filters,
          },
        });
    });

    it('should set the error state', () => {
      // given
      const action = loadUserGamesError({ error: 'error' });

      // when
      const newState = reducer(gamesDataMocks.initialState, action);

      // then
      expect(newState)
        .toEqual({
          ...gamesDataMocks.initialState,
          userGames: {
            ...gamesDataMocks.initialState.userGames,
            error: 'error',
          },
        });
    });
  });

  describe('fetch games', () => {

  });
});
