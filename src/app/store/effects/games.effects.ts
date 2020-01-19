import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {GamesState} from '../reducers/games.reducer';
import {Store} from '@ngrx/store';
import {GamesService} from '../services/games.service';
import {
  fetchGames,
  fetchGamesError,
  fetchGamesSuccess,
  loadUserGames,
  loadUserGamesError,
  loadUserGamesSuccess
} from '../actions/games.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

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
}
