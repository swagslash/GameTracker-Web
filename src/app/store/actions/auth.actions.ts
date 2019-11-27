import {createAction, props} from '@ngrx/store';
import {AuthLoginRequestData, AuthResponseData, AuthSignUpRequestData} from '../model';

export const autoLogin = createAction(
  '[Auth API] Auto login',
);

export const login = createAction(
  '[Auth API] Login',
  props<{ data: AuthLoginRequestData }>(),
);

export const signUp = createAction(
  '[Auth API] Sign up',
  props<{ data: AuthSignUpRequestData }>(),
);

export const authenticationSuccess = createAction(
  '[Auth API] Authentication success',
  props<{ response: AuthResponseData }>(),
);

export const authenticationFailure = createAction(
  '[Auth API] Authentication failure',
  props<{ error: string }>(),
);

export const unload = createAction(
  '[Auth API] Unload',
);
