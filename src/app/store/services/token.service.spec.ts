import {RequestHelperService} from '../../shared/services';
import {anything, deepEqual, instance, mock, resetCalls, verify} from 'ts-mockito';
import {TokenService} from './token.service';
import {tokenDataMocks} from '../testing/token-mock';

const requestHelperMock = mock(RequestHelperService);

describe('TokenService', () => {
  let tokenService: TokenService;

  beforeEach(() => {
    resetCalls(requestHelperMock);

    tokenService = new TokenService(instance(requestHelperMock));
  });

  it('should dispatch the load tokens request', () => {
    // when
    tokenService.loadTokens();

    // then
    verify(requestHelperMock.request(anything(), anything(), deepEqual({})))
      .once();
  });

  it('should dispatch the add token request', () => {
    // when
    tokenService.addToken();

    // then
    verify(requestHelperMock.request(anything(), anything(), deepEqual({})))
      .once();
  });

  it('should dispatch the remove token request', () => {
    // given
    const token = tokenDataMocks.token;

    // when
    tokenService.removeToken(token);

    // then
    verify(requestHelperMock.request(anything(), anything(), deepEqual({ token: tokenDataMocks.token.token })))
      .once();
  });
});
