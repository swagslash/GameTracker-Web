import {addGames, fetchGames, loadUserGames, unload} from '../actions/games.actions';
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

  it('should dispatch the fetch games action', () => {
    // when
    const searchTerm = 'game';
    gamesFacade.fetchGames(searchTerm);

    // then
    verify(store.dispatch(deepEqual(fetchGames({ searchTerm }))))
      .once();
  });

  it('should dispatch the add games action', () => {
    // when
    const gameIds = ['ID1', 'ID2'];
    gamesFacade.addGames(gameIds);

    // then
    verify(store.dispatch(deepEqual(addGames({ gameIds }))))
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
