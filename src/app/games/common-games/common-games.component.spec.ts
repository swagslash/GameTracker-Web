import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonGamesComponent} from './common-games.component';
import {MatCardModule, MatChipsModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {GamesListComponent} from '../games-list/games-list.component';
import {GameComponent} from '../game/game.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CommonGamesComponent', () => {
  let component: CommonGamesComponent;
  let fixture: ComponentFixture<CommonGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonGamesComponent, GamesListComponent, GameComponent],
      imports: [MatChipsModule, MatIconModule, MatFormFieldModule, MatCardModule, NoopAnimationsModule]
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
