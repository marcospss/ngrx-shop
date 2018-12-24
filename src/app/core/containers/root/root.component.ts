import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@reducersRoot';
import { CartPageActions } from '@cart/actions';
import * as fromCart from '@cart/reducers/cart.reducer';
import { Offer } from '@core/models/offer.model';
import { Cart } from '@core/models/cart.model';
import { LayoutActions, SearchActions } from '@core/actions';
import { take } from 'rxjs/operators';
@Component({
  selector: 'mps-root',
  templateUrl: './root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootComponent implements OnInit {
  itemsCart$: Observable<number>;
  showSearchBar$: Observable<boolean>;
  showMobileNav$: Observable<boolean>;
  searchQuery$: Observable<string>;
  resultSearch$: Observable<Offer[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.itemsCart$ = store.pipe(select(fromCart.selectTotal));
    this.showSearchBar$ = store.pipe(select(fromRoot.getShowSearchBar));
    this.showMobileNav$ = store.pipe(select(fromRoot.getShowMobileNav));
    this.searchQuery$ = store.pipe(
      select(fromRoot.getSearchQuery),
      take(1)
    );
    this.resultSearch$ = store.pipe(select(fromRoot.getSearchOffers));
  }

  closeSearchBar() {
    this.store.dispatch(new SearchActions.SearchOffers(null));
    this.store.dispatch(new LayoutActions.CloseSearchBar());
  }

  openSearchBar() {
    this.store.dispatch(new LayoutActions.OpenSearchBar());
  }

  search(query: string) {
    this.store.dispatch(new SearchActions.SearchOffers(query));
  }

  closeMobileNav() {
    this.store.dispatch(new LayoutActions.CloseMobileNav());
  }

  openMobileNav() {
    this.store.dispatch(new LayoutActions.OpenMobileNav());
  }

  ngOnInit() {
    this.store.dispatch(new CartPageActions.LoadCart());
  }
}
