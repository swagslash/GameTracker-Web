import {createAction, props} from '@ngrx/store';
import {Game} from '../model';

export const loadUserGames = createAction(
  '[Games API] Load user games',
  props<{ userId: string }>(),
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

export const unload = createAction(
  '[Games API] Unload',
);