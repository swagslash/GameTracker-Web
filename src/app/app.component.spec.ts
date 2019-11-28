import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {Component} from '@angular/core';
import {AuthFacade} from './store/facades/auth.facade';
import {instance, mock, resetCalls, verify, when} from 'ts-mockito';
import {EMPTY} from 'rxjs';

@Component({selector: 'app-main-nav', template: ''})
class MainNavMockComponent {
}

const authFacade = mock(AuthFacade);
when(authFacade.authenticatedUser$).thenReturn(EMPTY);
when(authFacade.error$).thenReturn(EMPTY);
when(authFacade.loading$).thenReturn(EMPTY);

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        MainNavMockComponent,
      ],
      providers: [
        {provide: AuthFacade, useFactory: () => instance(authFacade)},
      ],
    }).compileComponents();

    resetCalls(authFacade);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'game-tracker-web'`, () => {
    expect(component.title).toEqual('Game Tracker');
  });

  it('should call autoLogin in OnInit', () => {
    // then
    verify(authFacade.autoLogin()).once();
  });
});
