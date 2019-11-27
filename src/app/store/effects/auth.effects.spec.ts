import {AuthEffects} from './auth.effects';
import {anything, instance, mock, when} from 'ts-mockito';
import {ActionsSubject, Store} from '@ngrx/store';
import {AuthService} from '../services';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../shared/local-storage.service';
import {authenticationFailure, authenticationSuccess, autoLogin, login, signUp, unload} from '../actions/auth.actions';
import {AuthResponseData} from '../model';
import {EMPTY, of, throwError} from 'rxjs';
import {take} from 'rxjs/operators';
import {authDataMocks} from '../testing';

const actions$ = new ActionsSubject();
const store = mock(Store);
const authService = mock(AuthService);
const localStorageService = mock(LocalStorageService);
const router = mock(Router);

describe('AuthEffects', () => {
  let authEffects: AuthEffects;

  beforeEach(() => {
    authEffects = new AuthEffects(
      actions$,
      instance(store),
      instance(authService),
      instance(localStorageService),
      instance(router)
    );
  });

  it('should autoLogin', (done) => {
    // given
    const autoLoginAction = autoLogin();
    when(localStorageService.getItem<AuthResponseData>(anything())).thenReturn(authDataMocks.responseData);

    // when
    actions$.next(autoLoginAction);

    // then
    authEffects.autoLogin$
      .pipe(take(1))
      .subscribe((data) => {
        expect(data.type).toEqual(authenticationSuccess.type);
        done();
      });
  });

  it('should fail on autoLogin', (done) => {
    // given
    const autoLoginAction = autoLogin();
    when(localStorageService.getItem<AuthResponseData>(anything())).thenReturn(undefined);

    // when
    actions$.next(autoLoginAction);

    // then
    authEffects.autoLogin$
      .pipe(take(1))
      .subscribe((data) => {
      expect(data.type).toEqual(unload.type);
      done();
    });
  });

  it('should login', (done) => {
    // given
    const loginAction = login({ data: authDataMocks.loginData });
    when(authService.login(anything())).thenReturn(of(authDataMocks.responseData));

    // when
    actions$.next(loginAction);

    // then
    authEffects.login$
      .pipe(take(1))
      .subscribe((data) => {
      expect(data.type).toEqual(authenticationSuccess.type);
      done();
    });
  });

  it('should fail on login', (done) => {
    // given
    const loginAction = login({ data: authDataMocks.loginData });
    when(authService.login(anything())).thenReturn(throwError(undefined));

    // when
    actions$.next(loginAction);

    // then
    authEffects.login$
      .pipe(take(1))
      .subscribe((data) => {
      expect(data.type).toEqual(authenticationFailure.type);
      done();
    });
  });

  it('should sign up', (done) => {
    // given
    const signUpAction = signUp({ data: authDataMocks.signUpData });
    when(authService.signUp(anything())).thenReturn(of(authDataMocks.responseData));

    // when
    actions$.next(signUpAction);

    // then
    authEffects.signUp$
      .pipe(take(1))
      .subscribe((data) => {
      expect(data.type).toEqual(authenticationSuccess.type);
      done();
    });
  });

  it('should fail on sign up', (done) => {
    // given
    const signUpAction = signUp({ data: authDataMocks.signUpData });
    when(authService.signUp(anything())).thenReturn(throwError(undefined));

    // when
    actions$.next(signUpAction);

    // then
    authEffects.signUp$
      .pipe(take(1))
      .subscribe((data) => {
      expect(data.type).toEqual(authenticationFailure.type);
      done();
    });
  });

  it('should logout', (done) => {
    // given
    const unloadAction = unload();

    // when
    actions$.next(unloadAction);

    // then
    authEffects.logout$
      .pipe(take(1))
      .subscribe((data) => {
      expect(data).toEqual(EMPTY);
      done();
    });
  });
});
