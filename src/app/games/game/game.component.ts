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
    this.imgSrc = 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + this.game.imageId + '.jpg';
  }

}
