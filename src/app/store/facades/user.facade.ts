import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {select, Store} from "@ngrx/store";
import {remove, update} from "../actions/user.actions";
import {getUser} from "../selectors/user.selector";


@Injectable({
  providedIn: 'root',
})
export class UserFacade {

  constructor(private readonly store: Store<any>) {

  }

  update(user: User): void {
    this.store.dispatch(update({user}));
  }

  remove(): void {
    this.store.dispatch(remove());
  }

  user$ = this.store.pipe(select(getUser));

}
