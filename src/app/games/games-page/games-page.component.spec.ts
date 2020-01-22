import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GamesPageComponent} from './games-page.component';
import {GamesModule} from '../games.module';
import {instance, mock, when} from 'ts-mockito';
import {AuthFacade} from '../../store/facades/auth.facade';
import {EMPTY} from 'rxjs';
import {GamesFacade} from '../../store/facades/games.facade';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

const authFacade = mock(AuthFacade);
when(authFacade.authenticatedUser$).thenReturn(EMPTY);

const gamesFacade = mock(GamesFacade);
when(gamesFacade.userGames$).thenReturn(EMPTY);
when(gamesFacade.userGamesFilter$).thenReturn(EMPTY);

describe('GamesPageComponent', () => {
  let component: GamesPageComponent;
  let fixture: ComponentFixture<GamesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        GamesModule,
        NoopAnimationsModule,
      ],
      providers: [
        {provide: AuthFacade, useFactory: () => instance(authFacade)},
        {provide: GamesFacade, useFactory: () => instance(gamesFacade)},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
