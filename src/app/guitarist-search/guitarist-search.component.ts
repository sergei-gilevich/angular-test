import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {debounceTime, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Guitarist } from '../guitarist';
import { GuitaristService } from '../guitarist.service';

@Component({
  selector: 'app-guitarist-search',
  templateUrl: './guitarist-search.component.html',
  styleUrls: ['./guitarist-search.component.css']
})
export class GuitaristSearchComponent implements OnInit {

  guitarists$: Observable<Guitarist[]>;
  private searchTerms = new Subject<string>();

  constructor(private guitaristService: GuitaristService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.guitarists$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.guitaristService.serachByName(term))
    );
  }
}
