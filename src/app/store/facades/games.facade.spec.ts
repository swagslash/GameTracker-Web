import {loadUserGames, unload} from '../actions/games.actions';
import {deepEqual, instance, mock, verify} from 'ts-mockito';
import {GamesFacade} from './games.facade';
import {Store} from '@ngrx/store';

const store = mock(Store);

describe('GamesFacade', () => {
  let gamesFacade: GamesFacade;

  beforeEach(() => {
    gamesFacade = new GamesFacade(instance(store));
  });

  it('should dispatch the load user games action', () => {
    // when
    gamesFacade.loadUserGames();

    // then
    verify(store.dispatch(deepEqual(loadUserGames())))
      .once();
  });

  it('should displatch the unload action', () => {
    // when
    gamesFacade.unload();

    // then
    verify(store.dispatch(deepEqual(unload())))
      .once();
  });

});
