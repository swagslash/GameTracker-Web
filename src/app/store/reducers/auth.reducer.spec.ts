import {AuthResponseData} from "../model";
import {AuthState, reducer} from "./auth.reducer";
import {authenticationFailure, authenticationSuccess, autoLogin, login, signUp, unload} from "../actions/auth.actions";

const userState: AuthResponseData = {
  email: 'test@test.com',
  username: 'test',
  tokenType: 'bearer',
  accessToken: 'token',
  expiresIn: 1234,
};

const authenticatedState: AuthState = {
  currentUser: userState,
  loading: false,
  error: undefined,
};

const initialState: AuthState = {
  currentUser: undefined,
  loading: false,
  error: undefined,
};

describe('AuthReducer', () => {
  it('should unload the state', () => {
    // given
    const action = unload();

    // when
    const newState = reducer(authenticatedState, action);

    // then
    expect(newState)
      .toEqual(initialState);
  });

  it('should set loading to true', () => {
    // given
    const action = autoLogin();

    // when
    const newState = reducer(initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...initialState,
        loading: true,
      });
  });

  it('should set loading to true', () => {
    // given
    const action = login({
      data: {
        email: userState.email,
        password: '1234',
      }
    });

    // when
    const newState = reducer(initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...initialState,
        loading: true,
      });
  });

  it('should set loading to true', () => {
    // given
    const action = signUp({
      data: {
        email: userState.email,
        username: 'test',
        password: '1234',
      }
    });

    // when
    const newState = reducer(initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...initialState,
        loading: true,
      });
  });

  it('should set the authenticated user', () => {
    // given
    const action = authenticationSuccess({ response: userState });

    // when
    const newState = reducer(initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...initialState,
        currentUser: userState,
      });
  });

  it('should set the error state', () => {
    // given
    const action = authenticationFailure({ error: 'error' });

    // when
    const newState = reducer(initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...initialState,
        error: 'error',
      });
  });
});
