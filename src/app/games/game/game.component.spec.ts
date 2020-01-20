import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {GamesModule} from '../games.module';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [GamesModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.game = {
      gameId: '720',
      dbGameId: 'csgoid',
      imageId: 'co1vce',
      name: 'Counter-Strike Global Offensive',
      tags: [{tagId: '1', name: 'Genre: Shooter', slug: 'shooter'}]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name', () => {
    expect(fixture.nativeElement.querySelector('h2').innerText).toEqual('Counter-Strike Global Offensive');
  });
});
