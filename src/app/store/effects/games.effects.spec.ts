import {loadUserGames, loadUserGamesError, loadUserGamesSuccess} from '../actions/games.actions';
import {instance, mock, when} from 'ts-mockito';
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

  it('should load user games', (done) => {
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

  it('should fail on loading user games', (done) => {
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
