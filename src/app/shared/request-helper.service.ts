import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HttpMethod} from "./http-method";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class RequestHelperService {

  constructor(private readonly httpClient: HttpClient) {
  }

  request<P, R>(method: HttpMethod, requestUrl: string, payload?: P | undefined): Observable<R> {

    switch (method) {
      case HttpMethod.GET:
        return this.get(requestUrl);
      case HttpMethod.POST:
        return this.post(requestUrl, payload);
    }

    return throwError(`Unkown HttpMethod ${method} for request ${requestUrl} with payload ${payload}`);
  }

  private get<R>(requestUrl: string): Observable<R> {
    return this.httpClient.get<R>(requestUrl);
  }

  private post<P, R>(requestUrl: string, payload: P | undefined): Observable<R> {
    return this.httpClient.post<R>(requestUrl, payload);
  }
}
