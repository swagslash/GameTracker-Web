import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupData } from './signup-data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  readonly usernameControl = new FormControl('', [Validators.required]);
  readonly emailControl = new FormControl('', [Validators.email, Validators.required]);
  readonly passwordControl = new FormControl('', [Validators.required]);
  // TODO confirm password validator
  readonly confirmPasswordControl = new FormControl('', []);

  readonly signUpForm = new FormGroup({
    username: this.usernameControl,
    email: this.emailControl,
    password: this.passwordControl,
    confirm: this.confirmPasswordControl,
  });

  @Output() readonly signUpClick = new EventEmitter();
  @Output() readonly loginClick = new EventEmitter<void>();

  onSubmit(): void {
    const signUpData: SignupData = this.signUpForm.value;

    this.signUpClick.emit(signUpData);
  }

  onLoginClicked(): void {
    this.loginClick.emit();
  }
}
