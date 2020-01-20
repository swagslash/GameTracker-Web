import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GameDetailComponent} from './game-detail.component';
import {GamesModule} from '../games.module';

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [GamesModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailComponent);
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

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name', () => {
    expect(fixture.nativeElement.querySelector('.game-name').innerText).toEqual('Counter-Strike Global Offensive');
  });

  it('should display the correct cover art', () => {
    expect(fixture.nativeElement.querySelector('img').src).toEqual('https://images.igdb.com/igdb/image/upload/t_cover_big/co1vce.jpg');
  });
});
