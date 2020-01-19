import {createAction, props} from '@ngrx/store';
import {AgentToken} from '../model';

export const loadTokens = createAction(
  '[Token API] Load token',
);

export const addToken = createAction(
  '[Token API] Add token',
);

export const removeToken = createAction(
  '[Token API] Remove token',
  props<{ token: AgentToken }>(),
);

export const tokenSuccess = createAction(
  '[Token API] Success',
  props<{ tokens: Array<AgentToken> }>(),
);

export const tokenError = createAction(
  '[Token API] Error',
  props<{ error: string }>(),
);

export const unload = createAction(
  '[Token API] Unload',
);
