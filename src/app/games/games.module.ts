import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesListComponent} from './games-list/games-list.component';
import {GameComponent} from './game/game.component';
import {GamesPageComponent} from './games-page/games-page.component';
import {GamesRoutingModule} from './games-routing.module';
import {MatChipsModule, MatGridListModule, MatIconModule, MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {AppModule} from '../app.module';

@NgModule({
  declarations: [GamesListComponent, GameComponent, GamesPageComponent, GamesPageComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    AppModule,
  ]
})
export class GamesModule {
}
