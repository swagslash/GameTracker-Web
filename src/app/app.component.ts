import {Component, OnInit} from '@angular/core';
import {AuthFacade} from './store/facades/auth.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Game Tracker';

  constructor(private readonly authFacade: AuthFacade) {
  }

  ngOnInit() {
    // [Test output] TODO: remove once authentication is completely finished
    this.authFacade.loading$.subscribe((loading) => console.log('loading', loading));
    this.authFacade.authenticatedUser$.subscribe((user) => console.log('user', user));
    this.authFacade.error$.subscribe((error) => console.log('error', error));

    this.authFacade.autoLogin();
  }

}
