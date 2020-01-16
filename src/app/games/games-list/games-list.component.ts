import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../store/model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  @Input() gamesList: Game[];

  constructor() {
  }

  ngOnInit() {

  }

}
