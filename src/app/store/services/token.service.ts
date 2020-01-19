import {RequestHelperService} from '../../shared/services';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AgentToken} from '../model';
import {HttpMethod} from '../../shared/http-method';
import {ADD_TOKEN_PATH, REMOVE_TOKEN_PATH, TOKEN_PATH} from './paths';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  constructor(private readonly requestHelper: RequestHelperService) {
  }

  loadTokens(): Observable<Array<AgentToken>> {
    return this.requestHelper.request(HttpMethod.POST, TOKEN_PATH, {});
  }

  addToken(): Observable<Array<AgentToken>> {
    return this.requestHelper.request(HttpMethod.POST, ADD_TOKEN_PATH, {});
  }

  removeToken(token: AgentToken): Observable<Array<AgentToken>> {
    return this.requestHelper.request(HttpMethod.POST, REMOVE_TOKEN_PATH, { token: token.token});
  }
}
