import {Injectable} from '@angular/core';
import {State} from '../reducers';
import {Store} from '@ngrx/store';
import {AgentToken} from '../model';
import { unload, loadTokens, addToken, removeToken } from '../actions/token.actions';

@Injectable({
  providedIn: 'root',
})
export class TokenFacade {

  constructor(private readonly store: Store<State>) {
  }

  loadToken(): void {
    this.store.dispatch(loadTokens());
  }

  addToken(): void {
    this.store.dispatch(addToken());
  }

  removeToken(token: AgentToken): void {
    this.store.dispatch(removeToken({ token }));
  }

  unload(): void {
    this.store.dispatch(unload());
  }
}
