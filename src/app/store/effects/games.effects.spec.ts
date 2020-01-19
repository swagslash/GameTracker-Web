import {
  fetchGames,
  fetchGamesError,
  fetchGamesSuccess,
  loadUserGames,
  loadUserGamesError,
  loadUserGamesSuccess
} from '../actions/games.actions';
import {anything, instance, mock, when} from 'ts-mockito';
import {of, throwError} from 'rxjs';
import {gamesDataMocks} from '../testing';
import {ActionsSubject, Store} from '@ngrx/store';
import {GamesService} from '../services/games.service';
import {GamesEffects} from './games.effects';
import {take} from 'rxjs/operators';

const actions$ = new ActionsSubject();
const store = mock(Store);
const gamesService = mock(GamesService);

describe('GamesEffects', () => {
  let gamesEffects: GamesEffects;

  beforeEach(() => {
    gamesEffects = new GamesEffects(
      actions$,
      instance(store),
      instance(gamesService),
    );
  });

  describe('user games', () => {
    it('should succeed', (done) => {
      // given
      const loadUserGamesAction = loadUserGames();
      when(gamesService.loadGames()).thenReturn(of(gamesDataMocks.games));

      // when
      actions$.next(loadUserGamesAction);

      // then
      gamesEffects.loadUserGames$
        .pipe(take(1))
        .subscribe((data) => {
          expect(data.type).toEqual(loadUserGamesSuccess.type);
          done();
        });
    });

    it('should fail', (done) => {
      // given
      const loadUserGamesAction = loadUserGames();
      when(gamesService.loadGames()).thenReturn(throwError(undefined));

      // when
      actions$.next(loadUserGamesAction);

      // then
      gamesEffects.loadUserGames$
        .pipe(take(1))
        .subscribe((data) => {
          expect(data.type).toEqual(loadUserGamesError.type);
          done();
        });
    });
  });

  describe('fetch games', () => {
    it('should succeed', (done) => {
      // given
      const searchTerm = 'game';
      const fetchGamesAction = fetchGames({ searchTerm });
      when(gamesService.fetchGames(anything()))
        .thenReturn(of(gamesDataMocks.games));

      // when
      actions$.next(fetchGamesAction);

      // then
      gamesEffects.fetchGames$
        .pipe(take(1))
        .subscribe((data) => {
          expect(data.type).toEqual(fetchGamesSuccess.type);
          done();
        });
    });

    it('should fail', (done) => {
      // given
      const searchTerm = 'game';
      const fetchGamesAction = fetchGames({ searchTerm });
      when(gamesService.fetchGames(anything()))
        .thenReturn(throwError(undefined));

      // when
      actions$.next(fetchGamesAction);

      // then
      gamesEffects.fetchGames$
        .pipe(take(1))
        .subscribe((data) => {
          expect(data.type).toEqual(fetchGamesError.type);
          done();
        });
    });
  });
});
