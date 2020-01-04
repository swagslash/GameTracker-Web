import {RequestHelperService} from '../../shared/services';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../model';
import {HttpMethod} from '../../shared/http-method';
import {GAMES_PATH} from './paths';

@Injectable({
  providedIn: 'root',
})
export class GamesService {

  constructor(private readonly requestHelper: RequestHelperService) {
  }

  loadGames(userId: string): Observable<Array<Game>> {
    return this.requestHelper.request(HttpMethod.POST, GAMES_PATH, { userId });
  }
}
