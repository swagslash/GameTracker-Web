import {Component, Input} from '@angular/core';
import {Game} from '../../store/model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {

  @Input() pageTitle: string;
  @Input() gamesList: Game[];
}
