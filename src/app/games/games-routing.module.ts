import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GAMES_ROUTES} from './games-routes';

@NgModule({
  imports: [
    RouterModule.forChild(GAMES_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class GamesRoutingModule {
}
