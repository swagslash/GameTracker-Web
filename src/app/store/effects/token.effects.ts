import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {loadTokens, tokenError, tokenSuccess, addToken, removeToken} from '../actions/token.actions';
import {TokenService} from '../services/token.service';
import {TokenState} from '../reducers/token.reducer';

@Injectable()
export class TokenEffects {

  constructor(private readonly actions$: Actions,
              private readonly store: Store<TokenState>,
              private readonly tokenService: TokenService) {
  }

  tokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTokens),
      switchMap(() => {
        return this.tokenService.loadTokens()
          .pipe(
            map((tokens) => tokenSuccess( { tokens })),
            catchError((error) => of(tokenError({ error }))),
          );
      }),
    ));

  addToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToken),
      switchMap(() => {
        return this.tokenService.addToken()
          .pipe(
            map((tokens) => tokenSuccess( { tokens })),
            catchError((error) => of(tokenError({ error }))),
          );
      }),
    ));

  removeToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeToken),
      switchMap(({ token }) => {
        return this.tokenService.removeToken(token)
          .pipe(
            map((tokens) => tokenSuccess( { tokens })),
            catchError((error) => of(tokenError({ error }))),
          );
      }),
    ));
}
