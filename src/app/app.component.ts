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
    this.authFacade.autoLogin();
  }
}
