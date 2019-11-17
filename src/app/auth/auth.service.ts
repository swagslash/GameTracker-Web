import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LocalStorageService} from "../shared/local-storage.service";
import {RequestHelperService} from "../shared/request-helper.service";
import {HttpMethod} from "../shared/http-method";
import {LOGIN_PATH, SIGNUP_PATH} from "./authentication-paths";
import {tap} from "rxjs/operators";

interface AuthResponseData {
  accessToken: string;
  email: string;
  userName: string;
  // TODO
}

interface AuthRequestData {
  username?: string;
  email: string;
  password: string;
}

const USER_DATA = 'userData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private tokenExpirationTimer: number | undefined = undefined;

  // TODO change type to user-dto
  user$: BehaviorSubject<any | undefined> = new BehaviorSubject<any | undefined>(undefined);

  constructor(private readonly localStorage: LocalStorageService,
              private readonly requestHelper: RequestHelperService) {
  }

  signup(email: string, password: string): Observable<AuthResponseData> {
    const payload: AuthRequestData = {
      email,
      password,
    };

    return this.requestHelper.request(HttpMethod.POST, SIGNUP_PATH, payload).pipe(
      tap(this.handleAuthentication),
    );
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    const payload: AuthRequestData = {
      email,
      password,
    };

    return this.requestHelper.request(HttpMethod.POST, LOGIN_PATH, payload).pipe(
      tap(this.handleAuthentication),
    );
  }

  logout(): void {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }

    this.tokenExpirationTimer = undefined;

    this.user$.next(undefined);
    this.localStorage.removeItem(USER_DATA);

    // TODO redirect
  }

  autoLogin(): void {
    // TODO: change user dto
    const userData = this.localStorage.getItem<{ token: string }>(USER_DATA);

    if (userData === undefined) {
      return;
    }

    if (userData.token) {
      const expiresIn = 1_000_000;
      this.autoLogout(expiresIn);
    } else {
      this.logout();
    }
  }

  private autoLogout(expirationDuration: number): void {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }

    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(response: AuthResponseData) {
    const expiresIn = 1_000_000;

    // Create user entity
    const user = {};

    this.user$.next(user);

    this.autoLogout(expiresIn);

    this.localStorage.setItem(USER_DATA, {});
  }
}
