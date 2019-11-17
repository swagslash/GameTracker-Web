import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { SocialLoginComponent } from './social-login/social-login.component';
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    SocialLoginComponent,
  ],
})
export class AuthModule {
}
