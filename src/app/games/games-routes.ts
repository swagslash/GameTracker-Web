import {Routes} from '@angular/router';
import {GamesPageComponent} from './games-page/games-page.component';

export const GAMES_ROUTES: Routes = [
  {
    // TODO add auth guard + children
    path: '', component: GamesPageComponent,
  }
];
