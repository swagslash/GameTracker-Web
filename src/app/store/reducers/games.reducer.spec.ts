import {
  fetchGames,
  fetchGamesError,
  fetchGamesSuccess,
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
      const action = loadUserGames();

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
    it('should set loading to true', () => {
      // given
      const searchTerm = 'game';
      const action = fetchGames({ searchTerm });

      // when
      const newState = reducer(gamesDataMocks.initialState, action);

      // then
      expect(newState)
        .toEqual({
          ...gamesDataMocks.initialState,
          fetchGames: {
            ...gamesDataMocks.initialState.fetchGames,
            searchTerm,
            loading: true,
          },
        });
    });

    it('should set the games', () => {
      // given
      const action = fetchGamesSuccess({ games: gamesDataMocks.games });

      // when
      const newState = reducer(gamesDataMocks.initialState, action);

      // then
      expect(newState)
        .toEqual({
          ...gamesDataMocks.initialState,
          fetchGames: {
            ...gamesDataMocks.initialState.fetchGames,
            games: gamesDataMocks.games,
          },
        });
    });

    it('should set the error state', () => {
      // given
      const action = fetchGamesError({ error: 'error' });

      // when
      const newState = reducer(gamesDataMocks.initialState, action);

      // then
      expect(newState)
        .toEqual({
          ...gamesDataMocks.initialState,
          fetchGames: {
            ...gamesDataMocks.initialState.fetchGames,
            error: 'error',
          },
        });
    });
  });
});
