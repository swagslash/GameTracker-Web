import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AuthFacade} from '../store/facades/auth.facade';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private readonly user$ = this.authFacade.authenticatedUser$;

  constructor(private breakpointObserver: BreakpointObserver, private authFacade: AuthFacade) {
  }

  onLogout() {
    this.authFacade.logout();
  }
}
