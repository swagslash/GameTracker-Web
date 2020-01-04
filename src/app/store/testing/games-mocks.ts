import {FetchGamesState, GamesState, UserGamesState} from "../reducers/games.reducer";
import {Game} from "../model";

const initialUserGamesState: UserGamesState = {
  games: [],
  loading: false,
  error: undefined,
};

const initialFetchGamesState: FetchGamesState = {

};

const game: Game = {
  gameId: 'ID',
  dbGameId: 'DBID',
  imageId: 'IMAGEID',
  name: 'game',
  tags: [
    { name: 'TAG', slug: 'tag', tagId: 'ID' },
  ],
};

const games: Array<Game> = [game];

const initialState: GamesState = {
  userGames: initialUserGamesState,
  fetchGames: initialFetchGamesState,
};

const userGamesState: GamesState = {
  ...initialState,
  userGames: {
    ...initialState.userGames,
    games,
  },
};

const userGamesLoadingState: GamesState = {
  ...initialState,
  userGames: {
    ...initialState.userGames,
    loading: true,
  },
};

const userGamesErrorState: GamesState = {
  ...initialState,
  userGames: {
    ...initialState.userGames,
    error: 'error',
  },
};
export const gamesDataMocks = {
  initialState,
  games,
  userGamesState,
  userGamesLoadingState,
  userGamesErrorState,
};
