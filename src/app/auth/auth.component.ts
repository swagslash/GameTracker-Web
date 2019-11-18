import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";
import { LoginData } from "./login/login-data";
import {SignUpData} from "./signup/sign-up-data";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

  loginError: string;
  signInError: string;

  constructor(private readonly authService: AuthService) {
  }

  ngOnInit() {
  }

  onSignUp(signUpData: SignUpData): void {
    console.log('sign up');

    // TODO username?
    const signUp$ = this.authService.signup(signUpData.email, signUpData.username, signUpData.password);

    signUp$.subscribe(
      (response: {}) => {
        console.log('response', response);

        // navigate to dashboard
      },
      (error) => {
        console.log('error', error);
        this.signInError = error;
      }
    );
  }

  onLogin(loginData: LoginData): void {
    console.log('login');

    const login$ = this.authService.login(loginData.email, loginData.password);

    login$.subscribe(
      (response: {}) => {
        console.log('response', response);

        // navigate to dashboard
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  switchLoginMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

}
