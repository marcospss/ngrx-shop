import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromOffers from './../reducers';
import { OffersApiActions } from './../actions';
import { Offer } from '@core/models/offer.model';

@Component({
  selector: 'mps-featured',
  template: `<div mps-list [offers]="featured$ | async"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedComponent implements OnInit {
  featured$: Observable<Offer[]>;

  constructor(private store: Store<fromOffers.State>) {
    this.featured$ = store.pipe(select(fromOffers.getFeatured));
  }

  ngOnInit() {
    this.store.dispatch(new OffersApiActions.LoadFeatured());
  }
}
