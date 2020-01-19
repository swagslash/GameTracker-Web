import {Injectable} from '@angular/core';
import {State} from '../reducers';
import {select, Store} from '@ngrx/store';
import {
  fetchedGames,
  fetchGamesError,
  fetchGamesLoading,
  searchTerm,
  userGames,
  userGamesError,
  userGamesLoading
} from '../selectors/games.selector';
import {fetchGames, loadUserGames, unload} from '../actions/games.actions';

@Injectable({
  providedIn: 'root',
})
export class GamesFacade {

  userGames$ = this.store.pipe(select(userGames));
  userGamesLoading$ = this.store.pipe(select(userGamesLoading));
  userGamesError$ = this.store.pipe(select(userGamesError));

  searchTerm$ = this.store.pipe(select(searchTerm));
  fetchedGames$ = this.store.pipe(select(fetchedGames));
  fetchGamesLoading$ = this.store.pipe(select(fetchGamesLoading));
  fetchGamesError$ = this.store.pipe(select(fetchGamesError));

  constructor(private readonly store: Store<State>) {
  }

  loadUserGames(): void {
    this.store.dispatch(loadUserGames());
  }

  fetchGames(searchTerms: string): void {
    this.store.dispatch(fetchGames({ searchTerm: searchTerms }));
  }

  unload(): void {
    this.store.dispatch(unload());
  }
}
