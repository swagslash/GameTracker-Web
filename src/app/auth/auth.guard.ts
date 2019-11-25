import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {take, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AuthFacade} from "../store/facades/auth.facade";
import {AuthResponseData} from "../store/model";

type canActivateType = boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>;

const mapUserToUrl = (userData: AuthResponseData, router: Router): boolean | UrlTree => {
  if (userData !== undefined) {
    return true;
  }

  return router.createUrlTree(['/auth']);
};

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authFacade: AuthFacade, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): canActivateType {
    return this.authFacade.authenticatedUser$.pipe(
      take(1),
      map((user) => mapUserToUrl(user, this.router))
    );
  }
}
