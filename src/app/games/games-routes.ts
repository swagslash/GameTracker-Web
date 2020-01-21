import {Routes} from '@angular/router';
import {GamesPageComponent} from './games-page/games-page.component';
import {CommonGamesComponent} from './common-games/common-games.component';
import {SearchGamesComponent} from './search-games/search-games.component';

export const GAMES_ROUTES: Routes = [
  {
    // TODO add auth guard + children
    path: '', component: GamesPageComponent,
  },
  {
    path: 'common', component: CommonGamesComponent
  },
  {
    path: 'search', component: SearchGamesComponent
  }
];
