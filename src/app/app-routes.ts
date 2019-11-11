import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full',
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then(module => module.LandingPageModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
