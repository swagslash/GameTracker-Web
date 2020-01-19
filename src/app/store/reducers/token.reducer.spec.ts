import {reducer} from './token.reducer';
import {addToken, loadTokens, removeToken, tokenError, tokenSuccess, unload} from '../actions/token.actions';
import {tokenDataMocks} from '../testing/token-mock';

describe('TokenReducer', () => {
  it('should unload the state', () => {
    // given
    const action = unload();

    // when
    const newState = reducer(tokenDataMocks.tokenState, action);

    // then
    expect(newState)
      .toEqual(tokenDataMocks.initialState);
  });

  it('should set loading to true', () => {
    // given
    const action = loadTokens();

    // when
    const newState = reducer(tokenDataMocks.initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...tokenDataMocks.initialState,
        loading: true,
      });
  });

  it('should set loading to true', () => {
    // given
    const action = addToken();

    // when
    const newState = reducer(tokenDataMocks.initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...tokenDataMocks.initialState,
        loading: true,
      });
  });

  it('should set loading to true', () => {
    // given
    const action = removeToken({ token: tokenDataMocks.token });

    // when
    const newState = reducer(tokenDataMocks.initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...tokenDataMocks.initialState,
        loading: true,
      });
  });

  it('should set the tokens', () => {
    // given
    const action = tokenSuccess({ tokens: tokenDataMocks.tokens });

    // when
    const newState = reducer(tokenDataMocks.initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...tokenDataMocks.initialState,
        tokens: tokenDataMocks.tokens
      });
  });

  it('should set the error state', () => {
    // given
    const action = tokenError({ error: 'error' });

    // when
    const newState = reducer(tokenDataMocks.initialState, action);

    // then
    expect(newState)
      .toEqual({
        ...tokenDataMocks.initialState,
        error: 'error',
      });
  });
});
