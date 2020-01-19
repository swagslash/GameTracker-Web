import {anything, instance, mock, when} from 'ts-mockito';
import {of, throwError} from 'rxjs';
import {ActionsSubject, Store} from '@ngrx/store';
import {take} from 'rxjs/operators';
import {TokenService} from '../services/token.service';
import {TokenEffects} from './token.effects';
import {addToken, loadTokens, removeToken, tokenError, tokenSuccess} from '../actions/token.actions';
import {tokenDataMocks} from '../testing/token-mock';

const actions$ = new ActionsSubject();
const store = mock(Store);
const tokenService = mock(TokenService);

describe('TokenEffects', () => {
  let tokenEffects: TokenEffects;

  beforeEach(() => {
    tokenEffects = new TokenEffects(
      actions$,
      instance(store),
      instance(tokenService),
    );
  });

  it('should succeed after loading', (done) => {
    // given
    const loadTokensAction = loadTokens();
    when(tokenService.loadTokens()).thenReturn(of(tokenDataMocks.tokens));

    // when
    actions$.next(loadTokensAction);

    // then
    tokenEffects.tokens$
      .pipe(take(1))
      .subscribe((data) => {
        expect(data.type).toEqual(tokenSuccess.type);
        done();
      });
  });

  it('should fail after loading', (done) => {
    // given
    const loadTokensAction = loadTokens();
    when(tokenService.loadTokens()).thenReturn(throwError(undefined));

    // when
    actions$.next(loadTokensAction);

    // then
    tokenEffects.tokens$
      .pipe(take(1))
      .subscribe((data) => {
        expect(data.type).toEqual(tokenError.type);
        done();
      });
  });

  it('should succeed after adding', (done) => {
    // given
    const addTokenAction = addToken();
    when(tokenService.addToken()).thenReturn(of(tokenDataMocks.tokens));

    // when
    actions$.next(addTokenAction);

    // then
    tokenEffects.addToken$
      .pipe(take(1))
      .subscribe((data) => {
        expect(data.type).toEqual(tokenSuccess.type);
        done();
      });
  });

  it('should fail after adding', (done) => {
    // given
    const addTokenAction = addToken();
    when(tokenService.addToken()).thenReturn(throwError(undefined));

    // when
    actions$.next(addTokenAction);

    // then
    tokenEffects.addToken$
      .pipe(take(1))
      .subscribe((data) => {
        expect(data.type).toEqual(tokenError.type);
        done();
      });
  });

  it('should succeed after removing', (done) => {
    // given
    const token = tokenDataMocks.token;
    const removeTokenAction = removeToken({ token });
    when(tokenService.removeToken(anything())).thenReturn(of(tokenDataMocks.tokens));

    // when
    actions$.next(removeTokenAction);

    // then
    tokenEffects.removeToken$
      .pipe(take(1))
      .subscribe((data) => {
        expect(data.type).toEqual(tokenSuccess.type);
        done();
      });
  });

  it('should fail after removing', (done) => {
    // given
    const token = tokenDataMocks.token;
    const removeTokenAction = removeToken({ token });
    when(tokenService.removeToken(anything())).thenReturn(throwError(undefined));

    // when
    actions$.next(removeTokenAction);

    // then
    tokenEffects.removeToken$
      .pipe(take(1))
      .subscribe((data) => {
        expect(data.type).toEqual(tokenError.type);
        done();
      });
  });
});
