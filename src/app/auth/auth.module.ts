import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    AuthRoutingModule,
  ],
  declarations: [
    AuthComponent,
  ],
})
export class AuthModule {
}
