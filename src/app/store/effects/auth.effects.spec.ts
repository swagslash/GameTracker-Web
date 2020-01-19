import {AuthEffects} from './auth.effects';
import {anything, deepEqual, instance, mock, verify, when} from 'ts-mockito';
import {ActionsSubject, Store} from '@ngrx/store';
import {AuthService} from '../services';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../shared/services';
import {authenticationFailure, authenticationSuccess, autoLogin, login, signUp, unload} from '../actions/auth.actions';
import {AuthResponseData} from '../model';
import {EMPTY, of, throwError} from 'rxjs';
import {take} from 'rxjs/operators';
import {authDataMocks} from '../testing';
import {Location} from '@angular/common';

const actions$ = new ActionsSubject();
const store = mock(Store);
const authService = mock(AuthService);
const localStorageService = mock(LocalStorageService);
const router = mock(Router);
const location = mock(Location);

describe('AuthEffects', () => {
  let authEffects: AuthEffects;

  beforeEach(() => {
    authEffects = new AuthEffects(
      actions$,
      instance(store),
      instance(authService),
      instance(localStorageService),
      instance(router),
      instance(location),
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

  it('should auto logout', () => {
    jasmine.clock().install();

    // given
    const loginAction = login({ data: authDataMocks.loginData });
    when(authService.login(anything())).thenReturn(of(authDataMocks.responseData));
    actions$.next(loginAction);

    // when
    authEffects.login$.pipe(take(1)).subscribe();
    jasmine.clock().tick(authDataMocks.responseData.expiresIn + 10);

    // then
    verify(store.dispatch(deepEqual(unload())))
      .once();

    jasmine.clock().uninstall();
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

  it('should navigate to the landing page on successful login', (done) => {
    // given
    const successAction = authenticationSuccess({ response: authDataMocks.responseData });
    when(location.path()).thenReturn('/auth');

    // when
    actions$.next(successAction);

    // then
    authEffects.authenticationSuccess$
      .pipe(take(1))
      .subscribe(() => {
        verify(router.navigate(deepEqual(['/']))).once();
        done();
      });
  });

  it('should navigate redirect on successful login', (done) => {
    // given
    const successAction = authenticationSuccess({ response: authDataMocks.responseData });
    const originalPath = '/games?someParam=someValue';
    when(location.path()).thenReturn(originalPath);

    // when
    actions$.next(successAction);

    // then
    authEffects.authenticationSuccess$
      .pipe(take(1))
      .subscribe(() => {
        verify(router.navigate(deepEqual([originalPath]))).once();
        done();
      });
  });
});
