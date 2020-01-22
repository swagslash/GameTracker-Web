import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonGamesComponent} from './common-games.component';
import {MatCardModule, MatChipsModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {GamesListComponent} from '../games-list/games-list.component';
import {GameComponent} from '../game/game.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {GamesFacade} from '../../store/facades/games.facade';
import {instance, mock, when} from 'ts-mockito';
import {EMPTY} from 'rxjs';

const facadeMock = mock(GamesFacade);
when(facadeMock.commonGames$).thenReturn(EMPTY);
when(facadeMock.otherUsers$).thenReturn(EMPTY);


describe('CommonGamesComponent', () => {
  let component: CommonGamesComponent;
  let fixture: ComponentFixture<CommonGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonGamesComponent, GamesListComponent, GameComponent],
      imports: [MatChipsModule, MatIconModule, MatFormFieldModule, MatCardModule, NoopAnimationsModule],
      providers: [
        {provide: GamesFacade, useFactory: () => instance(facadeMock)},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
