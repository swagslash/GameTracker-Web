import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // TODO change to user-dto
  private readonly user: any | undefined = {
    token: 'this is a token',
  };

  // TODO change type to user-dto
  user$: BehaviorSubject<any | undefined> = new BehaviorSubject<any | undefined>(this.user);
}
