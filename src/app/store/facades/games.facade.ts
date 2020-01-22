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
  userGamesFilter,
  userGamesLoading,
  commonGames,
  otherUsers,
  commonGamesLoading,
  commonGamesError
} from '../selectors/games.selector';
import {addGames, fetchGames, filterUserGames, loadUserGames, unload, getCommonGames} from '../actions/games.actions';

@Injectable({
  providedIn: 'root',
})
export class GamesFacade {

  userGames$ = this.store.pipe(select(userGames));
  userGamesLoading$ = this.store.pipe(select(userGamesLoading));
  userGamesError$ = this.store.pipe(select(userGamesError));
  userGamesFilter$ = this.store.pipe(select(userGamesFilter));

  commonGames$ = this.store.pipe(select(commonGames));
  otherUsers$ = this.store.pipe(select(otherUsers));
  commonGamesError$ = this.store.pipe(select(commonGamesLoading));
  commonGamesLoading$ = this.store.pipe(select(commonGamesError));

  searchTerm$ = this.store.pipe(select(searchTerm));
  fetchedGames$ = this.store.pipe(select(fetchedGames));
  fetchGamesLoading$ = this.store.pipe(select(fetchGamesLoading));
  fetchGamesError$ = this.store.pipe(select(fetchGamesError));

  constructor(private readonly store: Store<State>) {
  }
  getCommonGames(users: string[]): void {
    this.store.dispatch(getCommonGames({ otherUsers: users }));
  }

  filterGames(filters: string[]): void {
    this.store.dispatch(filterUserGames({ filters }));
  }

  loadUserGames(): void {
    this.store.dispatch(loadUserGames());
  }

  fetchGames(searchTerms: string): void {
    this.store.dispatch(fetchGames({ searchTerm: searchTerms }));
  }

  addGames(gameIds: string[]): void {
    this.store.dispatch(addGames({ gameIds }));
  }

  unload(): void {
    this.store.dispatch(unload());
  }
}
