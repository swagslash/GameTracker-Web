import {reducer} from './auth.reducer';
import {authenticationFailure, authenticationSuccess, autoLogin, login, signUp, unload} from '../actions/auth.actions';
import {authDataMocks} from '../testing';

describe('AuthReducer', () => {
  it('should unload the state', () => {
    // given
    const action = unload();

    // when
    const newState = reducer(authDataMocks.authenticatedState, action);

    // then
    expect(newState)
      .toEqual(authDataMocks.initialState);
  });

  it('should set loading to true', () => {
    // given
    const action = autoLogin();

    // when
    const newState = reducer(authDataMocks.initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...authDataMocks.initialState,
        loading: true,
      });
  });

  it('should set loading to true', () => {
    // given
    const action = login({ data: authDataMocks.loginData });

    // when
    const newState = reducer(authDataMocks.initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...authDataMocks.initialState,
        loading: true,
      });
  });

  it('should set loading to true', () => {
    // given
    const action = signUp({ data: authDataMocks.signUpData });

    // when
    const newState = reducer(authDataMocks.initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...authDataMocks.initialState,
        loading: true,
      });
  });

  it('should set the authenticated user', () => {
    // given
    const action = authenticationSuccess({ response: authDataMocks.responseData });

    // when
    const newState = reducer(authDataMocks.initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...authDataMocks.initialState,
        currentUser: authDataMocks.responseData,
      });
  });

  it('should set the error state', () => {
    // given
    const action = authenticationFailure({ error: 'error' });

    // when
    const newState = reducer(authDataMocks.initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...authDataMocks.initialState,
        error: 'error',
      });
  });
});
