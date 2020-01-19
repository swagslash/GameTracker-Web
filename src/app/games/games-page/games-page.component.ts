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

  private static generateTestData(): Game[]  {
    return [{
      gameId: '720',
      dbGameId: 'csgoid',
      imageId: 'co1vce',
      name: 'Counter-Strike Global Offensive',
      tags: [{tagId: '1', name: 'Genre: Shooter', slug: 'shooter'},
        {tagId: '2', name: 'Tactical', slug: 'tac'},
        {tagId: '3', name: 'Multiplayer', slug: 'mp'}]
    }, {
      gameId: '720',
      dbGameId: 'bfv',
      imageId: 'co1siv',
      name: 'BF V',
      tags: [{tagId: '1', name: 'Shooter', slug: 'shooter'}]
    }, {
      gameId: '720',
      dbGameId: 'csgoid',
      imageId: 'co1rfy',
      name: 'Wolfenstein: Youngblood',
      tags: [{tagId: '1', name: 'Shooter', slug: 'shooter'}]
    }, {
      gameId: '722',
      dbGameId: 'doggos',
      imageId: 'zsn5wr0lessl6z8wj6ky',
      name: 'Nintendogs',
      tags: [{tagId: '1', name: 'Simulation', slug: 'sim'}]
    }];
  }

  ngOnInit() {
    this.userFacade.authenticatedUser$.pipe(take(1)).subscribe((user) => {
      this.gamesFacade.loadUserGames(user.email);
    });

    // TODO remove this and set actual user games
    this.gamesList = GamesPageComponent.generateTestData();
  }

}
