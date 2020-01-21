import {LayoutModule} from '@angular/cdk/layout';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MainNavComponent} from './main-nav.component';
import {AuthFacade} from '../store/facades/auth.facade';
import {instance, mock, when} from 'ts-mockito';
import {EMPTY} from 'rxjs';

const authFacade = mock(AuthFacade);
when(authFacade.authenticatedUser$).thenReturn(EMPTY);
when(authFacade.error$).thenReturn(EMPTY);
when(authFacade.loading$).thenReturn(EMPTY);

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ],
      providers: [
        {provide: AuthFacade, useFactory: () => instance(authFacade)},
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
