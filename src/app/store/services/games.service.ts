import {RequestHelperService} from '../../shared/services';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../model';
import {HttpMethod} from '../../shared/http-method';
import {ADD_GAMES_PATH, FETCH_GAMES_PATH, GAMES_PATH} from './paths';

@Injectable({
  providedIn: 'root',
})
export class GamesService {

  constructor(private readonly requestHelper: RequestHelperService) {
  }

  loadGames(): Observable<Array<Game>> {
    return this.requestHelper.request(HttpMethod.POST, GAMES_PATH, {});
  }

  fetchGames(searchTerm: string): Observable<Array<Game>> {
    return this.requestHelper.request(HttpMethod.POST, FETCH_GAMES_PATH, searchTerm);
  }

  addGames(gameIds: string[]): Observable<Array<Game>> {
    return this.requestHelper.request(HttpMethod.POST, ADD_GAMES_PATH, gameIds);
  }
}
