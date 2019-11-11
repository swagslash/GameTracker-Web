import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

// TODO: change any to User class
const mapUserToHttpEvent = (user: any, request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {  
  if (user === undefined) {
    return next.handle(request);
  }

  const httpParams = new HttpParams();
  httpParams.set('auth', user.token);

  const modifiedRequest = request.clone({
    params: httpParams,
  });

  return next.handle(modifiedRequest);
}

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  // TODO: change any to User class
  private readonly authenticatedUser$: Observable<any> = this.authService.user$;

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authenticatedUser$.pipe(
      take(1),
      exhaustMap((user) => mapUserToHttpEvent(user, request, next))
    );
  }
}
