import {FetchGamesState, GamesState, UserGamesState} from '../reducers/games.reducer';
import {Game} from '../model';

const initialUserGamesState: UserGamesState = {
  games: [],
  filters: [],
  loading: false,
  error: undefined,
};

const initialFetchGamesState: FetchGamesState = {

};

const game1: Game = {
  gameId: 'ID1',
  dbGameId: 'DB_ID1',
  imageId: 'IMAGE_ID1',
  name: 'game1',
  tags: [
    { name: 'TAG1', slug: 'tag1', tagId: 'ID1' },
    { name: 'TAG2', slug: 'tag2', tagId: 'ID2' },
  ],
};

const game2: Game = {
  gameId: 'ID2',
  dbGameId: 'DB_ID2',
  imageId: 'IMAGE_ID2',
  name: 'game2',
  tags: [
    { name: 'TAG2', slug: 'tag2', tagId: 'ID2' },
    { name: 'TAG3', slug: 'tag3', tagId: 'ID3' },
  ],
};

const games: Array<Game> = [game1, game2];

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

const userGamesFilterState: GamesState = {
  ...userGamesState,
  userGames: {
    ...userGamesState.userGames,
    filters: ['game2'],
  },
};

export const gamesDataMocks = {
  initialState,
  games,
  userGamesState,
  userGamesLoadingState,
  userGamesErrorState,
  userGamesFilterState,
};
