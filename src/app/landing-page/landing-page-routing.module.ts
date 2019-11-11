import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { LANDING_PAGE_ROUTES } from './landing-page-routes';

@NgModule({
  imports: [
    RouterModule.forChild(LANDING_PAGE_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class LandingPageRoutingModule {
}
