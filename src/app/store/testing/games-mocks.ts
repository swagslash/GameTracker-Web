import {CommonGamesState, FetchGamesState, GamesState, UserGamesState} from '../reducers/games.reducer';
import {Game} from '../model';

const initialUserGamesState: UserGamesState = {
  games: [],
  filters: [],
  loading: false,
  error: undefined,
};

const initialFetchGamesState: FetchGamesState = {
  searchTerm: '',
  games: undefined,
  loading: false,
  error: undefined,
};

export const initialCommonGamesState: CommonGamesState = {
  otherUsers: [],
  games: [],
  loading: false,
  error: undefined,
};

const game1: Game = {
  gameId: 'ID1',
  dbGameId: 'DB_ID1',
  imageId: 'IMAGE_ID1',
  name: 'game1',
  genres: [
    {name: 'TAG1', slug: 'tag1', tagId: 'ID1'},
    {name: 'TAG2', slug: 'tag2', tagId: 'ID2'},
  ],
  gamemodes: [
    {name: 'MODE1', slug: 'mode1', tagId: 'ID3'},
    {name: 'MODE1', slug: 'mode2', tagId: 'ID4'},
  ],
};

const game2: Game = {
  gameId: 'ID2',
  dbGameId: 'DB_ID2',
  imageId: 'IMAGE_ID2',
  name: 'game2',
  genres: [
    {name: 'TAG1', slug: 'tag1', tagId: 'ID1'},
    {name: 'TAG2', slug: 'tag2', tagId: 'ID2'},
  ],
  gamemodes: [
    {name: 'MODE1', slug: 'mode1', tagId: 'ID3'},
    {name: 'MODE1', slug: 'mode2', tagId: 'ID4'},
  ],
};

const games: Array<Game> = [game1, game2];

const initialState: GamesState = {
  userGames: initialUserGamesState,
  fetchGames: initialFetchGamesState,
  commonGames: initialCommonGamesState,
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

const fetchedGamesState: GamesState = {
  ...initialState,
  fetchGames: {
    searchTerm: 'game2',
    games: [game2],
    loading: false,
    error: undefined,
  },
};

const fetchedGamesLoadingState: GamesState = {
  ...initialState,
  fetchGames: {
    searchTerm: 'game2',
    games: undefined,
    loading: true,
    error: undefined,
  },
};

const fetchedGamesErrorState: GamesState = {
  ...initialState,
  fetchGames: {
    searchTerm: 'game2',
    games: undefined,
    loading: false,
    error: 'error',
  },
};

export const gamesDataMocks = {
  initialState,
  games,
  userGamesState,
  userGamesLoadingState,
  userGamesErrorState,
  userGamesFilterState,
  fetchedGamesState,
  fetchedGamesLoadingState,
  fetchedGamesErrorState,
};
