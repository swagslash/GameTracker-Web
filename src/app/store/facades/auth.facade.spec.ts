import {AuthFacade} from './auth.facade';
import {deepEqual, instance, mock, verify} from 'ts-mockito';
import {Store} from '@ngrx/store';
import {authDataMocks} from '../testing';
import {autoLogin, login, signUp, unload} from '../actions/auth.actions';

const store = mock(Store);

describe('AuthFacade', () => {
  let authFacade: AuthFacade;

  beforeEach(() => {
    authFacade = new AuthFacade(instance(store));
  });

  it('should dispatch the auto login action', () => {
    // when
    authFacade.autoLogin();

    // then
    verify(store.dispatch(deepEqual(autoLogin()))).once();
  });

  it('should dispatch the login action', () => {
    // when
    authFacade.login(authDataMocks.loginData.email, authDataMocks.loginData.password);

    // then
    verify(store.dispatch(deepEqual(login({data: authDataMocks.loginData})))).once();
  });

  it('should dispatch the sign up action', () => {
    // when
    authFacade.signUp(authDataMocks.signUpData.email, authDataMocks.signUpData.username,
      authDataMocks.signUpData.password);

    // then
    verify(store.dispatch(deepEqual(signUp({data: authDataMocks.signUpData})))).once();
  });

  it('should displatch the unload action', () => {
    // when
    authFacade.logout();

    // then
    verify(store.dispatch(deepEqual(unload()))).once();
  });

});
