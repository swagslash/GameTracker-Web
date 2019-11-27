import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import {Component} from "@angular/core";
import {instance, mock} from "ts-mockito";
import {AuthFacade} from "../store/facades/auth.facade";

@Component({selector: 'app-login', template: ''})
class LoginComponentMock {
}

@Component({selector: 'app-signup', template: ''})
class SignUpComponentMock {
}

const authFacade = mock(AuthFacade);

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthComponent,
        LoginComponentMock,
        SignUpComponentMock,
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
