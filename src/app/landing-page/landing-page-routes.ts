import {Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page.component';

export const LANDING_PAGE_ROUTES: Routes = [
  {
    // TODO add auth guard + children
    path: '', component: LandingPageComponent,
  }
];
