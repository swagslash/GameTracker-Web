import {Injectable} from '@angular/core';
import {State} from '../reducers';
import {select, Store} from '@ngrx/store';
import {userGames, userGamesError, userGamesLoading} from '../selectors/games.selector';
import {loadUserGames, unload} from '../actions/games.actions';

@Injectable({
  providedIn: 'root',
})
export class GamesFacade {

  userGames$ = this.store.pipe(select(userGames));
  userGamesLoading$ = this.store.pipe(select(userGamesLoading));
  userGamesError$ = this.store.pipe(select(userGamesError));

  constructor(private readonly store: Store<State>) {
  }

  loadUserGames(userId: string): void {
    this.store.dispatch(loadUserGames({ userId }));
  }

  unload(): void {
    this.store.dispatch(unload());
  }
}
