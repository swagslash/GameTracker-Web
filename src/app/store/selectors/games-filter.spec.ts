import {gamesDataMocks} from '../testing';
import {filterGames} from './games-filter';

describe('GamesFilter', () => {

  const games = gamesDataMocks.games;

  it('should give all games if filters are empty', () => {
    // given
    const filters = [];

    // when
    const filtered = filterGames(games, filters);

    // then
    expect(filtered)
      .toEqual(games);
  });

  it('should filter games by name', () => {
    // given
    const filters = ['game1'];

    // when
    const filtered = filterGames(games, filters);

    // then
    expect(filtered)
      .toEqual([games[0]]);
  });

  it('should filter games by tag', () => {
    // given
    const filters = ['tag2'];

    // when
    const filtered = filterGames(games, filters);

    // then
    expect(filtered)
      .toEqual(games);
  });
});
