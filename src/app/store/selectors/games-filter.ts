import {Game} from '../model';

const filterGame = (game: Game, filters: string[]): boolean => {
  const filterTerms = game.gamemodes.concat(game.genres).map((tag) => tag.name.toLocaleUpperCase());
  filterTerms.unshift(game.name.toLocaleUpperCase());

  for (const filter of filters) {
    if (!filterTerms.includes(filter)) {
      return false;
    }
  }

  return true;
};

export const filterGames = (games: Game[], filters: string[]): Game[] => {
  if (filters.length === 0) {
    return games;
  }

  const filtersUppercase = filters.map((filter) => filter.toLocaleUpperCase());

  return games.filter((game) => filterGame(game, filtersUppercase));
};
