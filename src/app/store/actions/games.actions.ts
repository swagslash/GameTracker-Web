import {createAction, props} from '@ngrx/store';
import {Game} from '../model';

export const getCommonGames = createAction(
  '[Games API] Get common games',
  props<{ otherUsers: string[] }>(),
);

export const getCommonGamesSuccess = createAction(
  '[Games API] Get common games success',
  props<{ commonGames: Array<Game> }>(),
);

export const getCommonGamesError = createAction(
  '[Games API] Get common games error',
  props<{ error: string }>(),
);

export const loadUserGames = createAction(
  '[Games API] Load user games',
);

export const filterUserGames = createAction(
  '[Games API] Filter user games',
  props<{ filters: string[] }>(),
);

export const loadUserGamesSuccess = createAction(
  '[Games API] Load user games success',
  props<{ games: Array<Game> }>(),
);

export const loadUserGamesError = createAction(
  '[Games API] Load user games error',
  props<{ error: string }>(),
);

export const fetchGames = createAction(
  '[Games API] Fetch games',
  props<{ searchTerm: string }>(),
);

export const fetchGamesSuccess = createAction(
  '[Games API] Fetch games success',
  props<{ games: Array<Game> }>(),
);

export const fetchGamesError = createAction(
  '[Games API] Fetch games error',
  props<{ error: string }>(),
);

export const addGames = createAction(
  '[Games API] Add games',
  props<{ gameIds: Array<string> }>(),
);

export const addGamesSuccess = createAction(
  '[Games API] Add games success',
  props<{ games: Array<Game> }>(),
);

export const addGamesError = createAction(
  '[Games API] Add games error',
  props<{ error: string }>(),
);

export const unload = createAction(
  '[Games API] Unload',
);
