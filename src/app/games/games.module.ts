import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesListComponent} from './games-list/games-list.component';
import {GameComponent} from './game/game.component';
import {GamesPageComponent} from './games-page/games-page.component';
import {GamesRoutingModule} from './games-routing.module';
import {
  MatButtonModule,
  MatChipsModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {CommonGamesComponent} from './common-games/common-games.component';
import {SearchGamesComponent} from './search-games/search-games.component';

@NgModule({
  declarations: [GamesListComponent, GameComponent, GamesPageComponent, GamesPageComponent, CommonGamesComponent, SearchGamesComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ]
})
export class GamesModule {
}
