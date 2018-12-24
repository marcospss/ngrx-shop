import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromShop from './../reducers';
import { SectionsActions } from './../actions';
import { Sections } from '@core/models/sections.model';
import { Offer } from '@core/models/offer.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mps-home',
  template: `
    <div class="container">
      <div class="row">
      <div class="col-12 col-lg-3">
      <mps-sidebar [sections]="sections$ | async"></mps-sidebar>
    </div>
    <div class="col-12 col-lg-9">
    <router-outlet></router-outlet>
    </div>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  sections$: Observable<Sections[]>;
  products$: Observable<Offer[]>;
  actionsSubscription: Subscription;

  constructor(
    private store: Store<fromShop.State>,
    private route: ActivatedRoute
  ) {
    this.sections$ = store.pipe(select(fromShop.getSections));
    this.products$ = store.pipe(select(fromShop.getProducts));
  }

  ngOnInit() {
    this.store.dispatch(new SectionsActions.LoadSections());
  }
}
