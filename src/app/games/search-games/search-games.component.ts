import {Component, ElementRef, ViewChild} from '@angular/core';
import {GamesFacade} from '../../store/facades/games.facade';
import {Game} from '../../store/model';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.scss']
})
export class SearchGamesComponent {

  @ViewChild('searchInput', {static: false}) input: ElementRef;
  readonly error$ = this.gamesFacade.fetchGamesError$;
  readonly loading$ = this.gamesFacade.fetchGamesLoading$;
  readonly games$ = this.gamesFacade.fetchedGames$;

  constructor(private readonly gamesFacade: GamesFacade) {
  }

  onAddGame(game: Game) {
    this.gamesFacade.addGames([game.dbGameId]);
  }

  searchGames() {
    this.gamesFacade.fetchGames(this.input.nativeElement.value);
  }
}
