import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonGamesComponent} from './common-games.component';

describe('CommonGamesComponent', () => {
  let component: CommonGamesComponent;
  let fixture: ComponentFixture<CommonGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonGamesComponent]
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
