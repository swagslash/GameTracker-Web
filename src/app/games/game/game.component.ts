import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../store/model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() public game: Game;
  private imgSrc: string;

  ngOnInit(): void {
    const imgPathPrefix = 'https://images.igdb.com/igdb/image/upload/t_cover_big/';
    const imgPathSuffix = '.jpg';

    if (this.game.imageId) {
      this.imgSrc = `${imgPathPrefix}${this.game.imageId}${imgPathSuffix}`;
    } else {
      this.imgSrc = 'http://vodacom-cd-games.mondiamedia.com/assets/rich/placeholder_games_cover.png';
    }
  }

}
