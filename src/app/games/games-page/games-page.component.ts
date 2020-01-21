import {Component, OnInit} from '@angular/core';
import {GamesFacade} from 'src/app/store/facades/games.facade';
import {take} from 'rxjs/operators';
import {AuthFacade} from '../../store/facades/auth.facade';
import {Game} from '../../store/model';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  constructor(private readonly gamesFacade: GamesFacade,
              private readonly userFacade: AuthFacade) {
  }

  private gamesList: Game[];

  ngOnInit() {
    this.userFacade.authenticatedUser$.pipe(take(1)).subscribe((user) => {
      this.gamesFacade.loadUserGames();
    });

    // TODO remove this and set actual user games
  }

}
