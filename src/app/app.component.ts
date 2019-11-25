import {Component, OnInit} from '@angular/core';
import {AuthFacade} from "./store/facades/auth.facade";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'game-tracker-web';

  constructor(private readonly authFacade: AuthFacade) {
  }

  ngOnInit() {
    this.authFacade.loading$.subscribe((loading) => console.log('loading', loading));

    this.authFacade.authenticatedUser$.subscribe((user) => console.log('user', user));

    this.authFacade.error$.subscribe((error) => console.log('error', error));
    //
    // this.authFacade.login('hugo@pepe.com', '1234');

    // this.authFacade.signUp('hugo@pepe.com', 'hugopepe', '1234');

    // this.authFacade.logout();

    // this.authFacade.autoLogin();
  }

}
