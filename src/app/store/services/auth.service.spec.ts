import {AuthService} from "./auth.service";
import {RequestHelperService} from "../../shared/request-helper.service";
import {anything, deepEqual, instance, mock, verify} from "ts-mockito";
import {AuthLoginRequestData, AuthSignUpRequestData} from "../model";

const requestHelperMock = mock(RequestHelperService);

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService(instance(requestHelperMock));
  });

  it('should dispatch the login request', () => {
    // given
    const email = 'test@test.com';
    const password = '1234';
    const loginData: AuthLoginRequestData = {
      email,
      password,
    };

    // when
    authService.login(loginData);

    // then
    verify(requestHelperMock.request(anything(), anything(), deepEqual(loginData))).once();
  });

  it('should dispatch the sign up request', () => {
    // given
    const email = 'test@test.com';
    const username = 'test';
    const password = '1234';
    const signUpData: AuthSignUpRequestData = {
      email,
      username,
      password,
    };

    // when
    authService.signUp(signUpData);

    // then
    verify(requestHelperMock.request(anything(), anything(), deepEqual(signUpData))).once();
  });
});
