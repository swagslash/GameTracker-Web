import {Injectable} from '@angular/core';
import {AuthState} from '../reducers/auth.reducer';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {authenticationSuccess, authenticationFailure, login, signUp, unload, autoLogin} from '../actions/auth.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {AuthService} from '../services';
import {EMPTY, Observable, of, throwError} from 'rxjs';
import {AuthResponseData} from '../model';
import {LocalStorageService} from '../../shared/services';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

const AUTH_DATA_KEY = 'userData';

@Injectable()
export class AuthEffects {

  private tokenExpirationTimer: any;

  constructor(private readonly actions$: Actions,
              private readonly store: Store<AuthState>,
              private readonly authService: AuthService,
              private readonly localStorage: LocalStorageService,
              private readonly router: Router,
              private readonly location: Location) {
  }

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(autoLogin),
      switchMap(() => {
        return this.autoLogin()
          .pipe(
            tap((response) => this.handleAuthentication(response)),
            map((response) => authenticationSuccess({response})),
            catchError(() => of(unload())),
          );
      }),
    ),
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ data }) => {
        return this.authService.login(data)
          .pipe(
            tap((response) => this.handleAuthentication(response)),
            map((response) => authenticationSuccess({ response })),
            catchError((error) => of(authenticationFailure({ error }))),
          );
      }),
    ),
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUp),
      switchMap(({ data }) => {
        return this.authService.signUp(data)
          .pipe(
            tap((response) => this.handleAuthentication(response)),
            map((response) => authenticationSuccess({ response })),
            catchError((error) => of(authenticationFailure({ error }))),
          );
      }),
    ),
  );

  authenticationSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(authenticationSuccess),
        tap(() => {
          this.handleLogin();
        }),
        map(() => EMPTY),
      ),
    {
      dispatch: false,
    });

  logout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(unload),
        tap(() => {
          this.handleLogout();
        }),
        map(() => EMPTY),
      ),
    {
      dispatch: false,
    });

  /**
   * Redirects the user
   * - To the landing page if coming from the auth-page
   * - To where he was coming from otherwise
   */
  private handleLogin(): void {
    const path = this.location.path();

    // Ignore query parameters
    const page = path.split('?')[0];

    const redirectPath = page === '/auth' ? '/' : path;

    void this.router.navigate([redirectPath]);
  }

  private handleAuthentication(response: AuthResponseData): void {
    this.localStorage.setItem(AUTH_DATA_KEY, response);
    this.autoLogout(response.expiresIn);
  }

  private handleLogout(): void {
    this.localStorage.removeItem(AUTH_DATA_KEY);

    void this.router.navigate(['/auth']);
  }

  private autoLogout(expiresIn: number): void {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }

    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(unload());
    }, expiresIn);
  }

  private autoLogin(): Observable<AuthResponseData> {
    const authData: AuthResponseData | undefined = this.localStorage.getItem<AuthResponseData>(AUTH_DATA_KEY);

    if (authData === undefined) {
      return throwError(undefined);
    }

    return of(authData);
  }
}
