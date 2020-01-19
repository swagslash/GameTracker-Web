import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../store/model';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;
  private imgSrc: string;

  // TODO outsource
  ngOnInit(): void {
    const imgPathPrefix = 'https://images.igdb.com/igdb/image/upload/t_cover_big/';
    const imgPathSuffix = '.jpg';

    this.imgSrc = `${imgPathPrefix}${this.game.imageId}${imgPathSuffix}`;
  }
}
