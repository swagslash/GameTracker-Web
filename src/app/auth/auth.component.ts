import {Component} from '@angular/core';
import {LoginData} from "./login/login-data";
import {SignUpData} from "./signup/sign-up-data";
import {AuthFacade} from "../store/facades/auth.facade";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  isLoginMode = true;

  authenticationError$ = this.authFacade.error$;

  constructor(private readonly authFacade: AuthFacade) {
  }

  onLogin(loginData: LoginData): void {
    this.authFacade.login(loginData.email, loginData.password);
  }

  onSignUp(signUpData: SignUpData): void {
    this.authFacade.signUp(signUpData.email, signUpData.username, signUpData.password);
  }

  switchLoginMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

}
