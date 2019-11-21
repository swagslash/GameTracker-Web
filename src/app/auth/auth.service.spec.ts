import {AuthService} from './auth.service';
import {RequestHelperService} from '../shared/request-helper.service';
import {LocalStorageService} from '../shared/local-storage.service';
import {anything, instance, mock, when} from 'ts-mockito';
import {BehaviorSubject} from 'rxjs';
import {AuthResponseData} from './auth-data';
import {take} from 'rxjs/operators';

const localStorageMock = mock(LocalStorageService);
const requestHelperMock = mock(RequestHelperService);

const signUpResponse$ = new BehaviorSubject<AuthResponseData | undefined>(undefined);

const email = 'test@test.com';
const username = 'test';
const password = 'abc123';
const expiresIn = 100;
const accessToken = 'token';
const tokenType = 'bearer';

const authResponse: AuthResponseData = {
  email,
  username,
  accessToken,
  expiresIn,
  tokenType,
};

describe('AuthService', () => {
  const localStorage = instance(localStorageMock);
  const requestHelper = instance(requestHelperMock);

  const service = new AuthService(localStorage, requestHelper);

  it('should sign up a user', (done) => {
    // given
    signUpResponse$.next(authResponse);
    when(requestHelperMock.request(anything(), anything(), anything())).thenReturn(signUpResponse$);
    when(localStorageMock.getItem<{ token: string }>(anything())).thenReturn({
      token: 'token',
    });

    // when
    const result$ = service.signup(email, username, password);

    // then
    result$
      .pipe(take(1))
      .subscribe((result) => {
        expect(result).toEqual(authResponse);
        expect(service.isLoggedIn()).toBeTruthy();

        done();
      });
  });

  it('should login a user', (done) => {
    // given
    signUpResponse$.next(authResponse);
    when(requestHelperMock.request(anything(), anything(), anything())).thenReturn(signUpResponse$);
    when(localStorageMock.getItem<{ token: string }>(anything())).thenReturn({
      token: 'token',
    });

    // when
    const result$ = service.login(email, password);

    // then
    result$
      .pipe(take(1))
      .subscribe((result) => {
        expect(result).toEqual(authResponse);
        expect(service.isLoggedIn()).toBeTruthy();

        done();
      });
  });
});
