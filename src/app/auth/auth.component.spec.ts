import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthComponent} from './auth.component';
import {Component} from '@angular/core';
import {instance, mock} from 'ts-mockito';
import {AuthFacade} from '../store/facades/auth.facade';
import {MatChipsModule} from '@angular/material/chips';

@Component({selector: 'app-login', template: ''})
class LoginMockComponent {
}

@Component({selector: 'app-signup', template: ''})
class SignUpMockComponent {
}

const authFacade = mock(AuthFacade);

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthComponent,
        LoginMockComponent,
        SignUpMockComponent,
      ],
      imports: [
        MatChipsModule,
      ],
      providers: [
        {provide: AuthFacade, useFactory: () => instance(authFacade)},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
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
