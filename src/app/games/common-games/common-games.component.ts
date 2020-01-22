import {Component} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {GamesFacade} from '../../store/facades/games.facade';
import {filter, map, take} from 'rxjs/operators';

export interface Username {
  name: string;
}

@Component({
  selector: 'app-common-games',
  templateUrl: './common-games.component.html',
  styleUrls: ['./common-games.component.scss']
})
export class CommonGamesComponent {

  commonGames$ = this.facade.commonGames$;

  constructor(private readonly facade: GamesFacade) {
    // ugly af
    this.facade.otherUsers$.pipe(
      take(1),
      map((usernames) => usernames.join(';')),
      filter((usernames) => usernames !== ''),
    ).subscribe((names) => this.usernames.push(names));
  }

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly usernames: string[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our user
    if ((value || '').trim()) {
      this.usernames.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(username: string): void {
    const index = this.usernames.indexOf(username);

    if (index >= 0) {
      this.usernames.splice(index, 1);
    }
  }

  getCommonGames() {
    this.facade.getCommonGames(this.usernames);
  }
}
