import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from '../reducers';
import {AuthLoginRequestData, AuthSignUpRequestData} from '../model';
import {autoLogin, login, signUp, unload} from '../actions/auth.actions';
import {authenticatedUser, authenticationError, authenticationLoading} from '../selectors/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {

  loading$ = this.store.pipe(select(authenticationLoading));
  error$ = this.store.pipe(select(authenticationError));
  authenticatedUser$ = this.store.pipe(select(authenticatedUser));

  constructor(private readonly store: Store<State>) {
  }

  autoLogin(): void {
    this.store.dispatch(autoLogin());
  }

  login(email: string, password: string): void {
    const loginData: AuthLoginRequestData = {
      email,
      password,
    };

    this.store.dispatch(login({ data: loginData }));
  }

  signUp(email: string, username: string, password: string): void {
    const signUpData: AuthSignUpRequestData = {
      email,
      username,
      password,
    };

    this.store.dispatch(signUp({ data: signUpData }));
  }

  logout(): void {
    this.store.dispatch(unload());
  }
}
