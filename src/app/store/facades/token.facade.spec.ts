import {deepEqual, instance, mock, verify} from 'ts-mockito';
import {Store} from '@ngrx/store';
import {TokenFacade} from './token.facade';
import {tokenDataMocks} from '../testing/token-mock';
import {addToken, loadTokens, removeToken, unload} from '../actions/token.actions';

const store = mock(Store);

describe('TokenFacade', () => {
  let tokenFacade: TokenFacade;

  beforeEach(() => {
    tokenFacade = new TokenFacade(instance(store));
  });

  it('should dispatch the load token action', () => {
    // when
    tokenFacade.loadToken();

    // then
    verify(store.dispatch(deepEqual(loadTokens())))
      .once();
  });

  it('should dispatch the add token action', () => {
    // when
    tokenFacade.addToken();

    // then
    verify(store.dispatch(deepEqual(addToken())))
      .once();
  });

  it('should dispatch the remove token action', () => {
    // when
    const token = tokenDataMocks.token;
    tokenFacade.removeToken(token);

    // then
    verify(store.dispatch(deepEqual(removeToken({ token }))))
      .once();
  });

  it('should displatch the unload action', () => {
    // when
    tokenFacade.unload();

    // then
    verify(store.dispatch(deepEqual(unload())))
      .once();
  });
});
