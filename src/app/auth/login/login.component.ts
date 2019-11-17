import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginData} from "./login-data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  readonly emailControl = new FormControl('', [Validators.email, Validators.required]);
  readonly passwordControl = new FormControl('', [Validators.required]);

  readonly loginForm = new FormGroup({
    'email': this.emailControl,
    'password': this.passwordControl,
  });

  @Output() readonly loginClick = new EventEmitter<LoginData>();
  @Output() readonly signUpClick = new EventEmitter<void>();

  onSubmit(): void {
    const loginData: LoginData = this.loginForm.value;

    this.loginClick.emit(loginData);
  }

  onSignUpClicked(): void {
    this.signUpClick.emit();
  }
}
