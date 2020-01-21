import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, takeUntil, tap} from 'rxjs/operators';
import {fromEvent, Subject} from 'rxjs';
import {GamesFacade} from '../../store/facades/games.facade';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.scss']
})
export class SearchGamesComponent implements AfterViewInit, OnDestroy {

  readonly destroy$ = new Subject<void>();
  @ViewChild('searchInput', {static: false}) input: ElementRef;
  readonly error$ = this.gamesFacade.fetchGamesError$;
  readonly loading$ = this.gamesFacade.fetchGamesLoading$;
  readonly games$ = this.gamesFacade.fetchedGames$;

  constructor(private readonly gamesFacade: GamesFacade) {
  }

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.destroy$),
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged(),
        tap(async (event: KeyboardEvent) => {
          console.log(`The input value is ${this.input.nativeElement.value}`);
        })
      )
      .subscribe(() => this.gamesFacade.fetchGames(this.input.nativeElement.value));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSeachInputChange($event: Event) {

  }
}
