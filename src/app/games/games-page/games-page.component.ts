import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GamesFacade} from 'src/app/store/facades/games.facade';
import {AuthFacade} from '../../store/facades/auth.facade';
import {Game} from '../../store/model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  readonly games$ = this.gamesFacade.userGames$;
  readonly filter$ = this.gamesFacade.userGamesFilter$
    .pipe(
      map((terms: string[]) => {
        return terms.length !== 0 ? terms[0] : '';
      }),
    );

  @ViewChild('filterInput', {static: false}) input: ElementRef;

  constructor(private readonly gamesFacade: GamesFacade) {
  }

  ngOnInit() {
    this.gamesFacade.loadUserGames();
  }

  filterGames() {
    const filterValue = this.input.nativeElement.value;


    this.gamesFacade.filterGames(filterValue === '' ? [] : [filterValue]);
  }
}
