import {Component, OnInit} from '@angular/core';
import {UserFacade} from "./store/facades/user.facade";
import {User} from "./store/model/user";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'game-tracker-web';

  constructor(private readonly userFacade: UserFacade) {
  }

  ngOnInit() {
    const user: User = {
      email: 'dkfslf',
      username: 'sdfjsdklfjsdklfjklsdf',
      token: 'iwas',
      tokenType: 'bearer',
      expiresIn: 123123,
    };
    this.userFacade.update(user);
    this.userFacade.user$
      .pipe(take(1))
      .subscribe((user) => console.log(user));
    this.userFacade.remove();
    this.userFacade.user$
      .pipe(take(1))
      .subscribe((user) => console.log(user));
  }
}
