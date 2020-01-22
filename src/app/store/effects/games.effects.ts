import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {GamesState} from '../reducers/games.reducer';
import {Store} from '@ngrx/store';
import {GamesService} from '../services/games.service';
import {
  addGames,
  addGamesError,
  addGamesSuccess,
  fetchGames,
  fetchGamesError,
  fetchGamesSuccess, getCommonGames, getCommonGamesError, getCommonGamesSuccess,
  loadUserGames,
  loadUserGamesError,
  loadUserGamesSuccess
} from '../actions/games.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

@Injectable()
export class GamesEffects {

  constructor(private readonly actions$: Actions,
              private readonly store: Store<GamesState>,
              private readonly gamesService: GamesService) {
  }

  loadUserGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserGames),
      switchMap(() => {
        return this.gamesService.loadGames()
          .pipe(
            map((games) => loadUserGamesSuccess( { games })),
            catchError((error) => of(loadUserGamesError({ error }))),
          );
      }),
    ));

  fetchGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchGames),
      switchMap(({ searchTerm }) => {
        return this.gamesService.fetchGames(searchTerm)
          .pipe(
            map((games) => fetchGamesSuccess({ games })),
            catchError((error) => of(fetchGamesError({ error }))),
          );
      }),
    ));

  addGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addGames),
      switchMap(({ gameIds }) => {
        return this.gamesService.addGames(gameIds)
          .pipe(
            map((games) => addGamesSuccess({ games })),
            catchError((error) => of(addGamesError({ error }))),
          );
      }),
    ));

  getCommonGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCommonGames),
      switchMap(({ otherUsers }) => {
        return this.gamesService.getCommonGames(otherUsers)
          .pipe(
            map((commonGames) => getCommonGamesSuccess({ commonGames })),
            catchError((error) => of(getCommonGamesError({ error }))),
          );
      }),
    ));

  addGamesSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addGamesSuccess),
      tap(() => {
        // void this.router.navigate(['/games']);
      }),
      map(() => EMPTY),
    ), {
    dispatch: false,
  });
}
