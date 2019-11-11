import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth-routes';

@NgModule({
  imports: [
    RouterModule.forChild(AUTH_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthRoutingModule {
}
