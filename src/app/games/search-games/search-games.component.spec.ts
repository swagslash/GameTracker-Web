import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchGamesComponent} from './search-games.component';
import {MatCardModule, MatChipsModule, MatFormFieldModule, MatProgressSpinnerModule} from '@angular/material';
import {GamesListComponent} from '../games-list/games-list.component';
import {GameComponent} from '../game/game.component';
import {GamesFacade} from '../../store/facades/games.facade';
import {instance, mock, when} from 'ts-mockito';
import {EMPTY} from 'rxjs';

const gamesFacade = mock(GamesFacade);
when(gamesFacade.fetchedGames$).thenReturn(EMPTY);
when(gamesFacade.fetchGamesLoading$).thenReturn(EMPTY);
when(gamesFacade.fetchGamesError$).thenReturn(EMPTY);

describe('SearchGamesComponent', () => {
  let component: SearchGamesComponent;
  let fixture: ComponentFixture<SearchGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchGamesComponent, GamesListComponent, GameComponent],
      imports: [MatFormFieldModule, MatProgressSpinnerModule, MatChipsModule, MatCardModule],
      providers: [
        {provide: GamesFacade, useFactory: () => instance(gamesFacade)},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
