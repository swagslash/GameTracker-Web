import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

type canActivateType = boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>;

const mapUserToUrl = (user: any, router: Router): boolean | UrlTree => {
  if (user !== undefined) {
    return true;
  }

  return router.createUrlTree(['/auth']);
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  private readonly user$ = this.authService.user$;

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): canActivateType {
    return this.user$.pipe(
      take(1),
      map((user) => mapUserToUrl(user, this.router))
    );
  }
}