import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {exhaustMap, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AuthFacade} from '../store/facades/auth.facade';
import {AuthResponseData} from '../store/model';

const mapUserToHttpEvent =
  (userData: AuthResponseData, request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
    if (userData === undefined) {
      return next.handle(request);
    }

    const modifiedRequest = request.clone({
      setHeaders: {Authorization: `Bearer ${userData.accessToken}`}
    });
    console.log(modifiedRequest);

    return next.handle(modifiedRequest);
  };

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authFacade: AuthFacade) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authFacade.authenticatedUser$.pipe(
      take(1),
      exhaustMap((user) => mapUserToHttpEvent(user, request, next))
    );
  }
}
