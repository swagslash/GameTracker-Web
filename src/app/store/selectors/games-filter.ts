import {Game} from '../model';

const filterGame = (game: Game, filters: string[]): boolean => {
  const gameTerms = game.gamemodes.concat(game.genres).map((tag) => tag.name.toLocaleUpperCase());
  gameTerms.unshift(game.name.toLocaleUpperCase());

  for (const filter of filters) {
    for (const gameTerm of gameTerms) {
      if (gameTerm.includes(filter)) {
        return true;
      }
    }
  }

  return false;
};

export const filterGames = (games: Game[], filters: string[]): Game[] => {
  if (filters.length === 0) {
    return games;
  }

  const filtersUppercase = filters.map((filter) => filter.toLocaleUpperCase());

  return games.filter((game) => filterGame(game, filtersUppercase));
};
