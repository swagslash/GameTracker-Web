import {Injectable} from "@angular/core";
import {RequestHelperService} from "../../shared/request-helper.service";
import {AuthLoginRequestData, AuthResponseData, AuthSignUpRequestData} from "../model";
import {Observable} from "rxjs";
import {HttpMethod} from "../../shared/http-method";
import {LOGIN_PATH, SIGNUP_PATH} from "./paths";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private readonly requestHelper: RequestHelperService){
  }

  login(credentials: AuthLoginRequestData): Observable<AuthResponseData> {
    return this.requestHelper.request(HttpMethod.POST, LOGIN_PATH, credentials);
  }

  signUp(data: AuthSignUpRequestData): Observable<AuthResponseData> {
    return this.requestHelper.request(HttpMethod.POST, SIGNUP_PATH, data);
  }
}
