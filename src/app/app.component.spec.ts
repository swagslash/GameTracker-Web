import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {Component} from "@angular/core";
import {AuthFacade} from "./store/facades/auth.facade";
import {instance, mock, when} from "ts-mockito";
import {EMPTY} from "rxjs";

@Component({selector: 'app-main-nav', template: ''})
class MainNavComponentMock {
}

const authFacade = mock(AuthFacade);
when(authFacade.authenticatedUser$).thenReturn(EMPTY);
when(authFacade.error$).thenReturn(EMPTY);
when(authFacade.loading$).thenReturn(EMPTY);

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        MainNavComponentMock,
      ],
      providers: [
        {provide: AuthFacade, useFactory: () => instance(authFacade)},
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'game-tracker-web'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Game Tracker');
  });
});
