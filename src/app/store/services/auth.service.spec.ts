import {AuthService} from './auth.service';
import {RequestHelperService} from '../../shared/request-helper.service';
import {anything, deepEqual, instance, mock, verify} from 'ts-mockito';
import {authDataMocks} from '../testing';

const requestHelperMock = mock(RequestHelperService);

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService(instance(requestHelperMock));
  });

  it('should dispatch the login request', () => {
    // given
    const loginData = authDataMocks.loginData;

    // when
    authService.login(loginData);

    // then
    verify(requestHelperMock.request(anything(), anything(), deepEqual(loginData))).once();
  });

  it('should dispatch the sign up request', () => {
    // given
    const signUpData = authDataMocks.signUpData;

    // when
    authService.signUp(signUpData);

    // then
    verify(requestHelperMock.request(anything(), anything(), deepEqual(signUpData))).once();
  });
});
