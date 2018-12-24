import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromShop from './../reducers';
import { SectionsActions, ProductsSectionsActions } from './../actions';
import { Sections } from '@core/models/sections.model';
import { Offer } from '@core/models/offer.model';
import { Cart } from '@core/models/cart.model';
import * as fromCart from '@cart/reducers/cart.reducer';
import { CartService } from '@core/services/cart.service';
import { SelectedItemPageActions } from '@cart/actions';

@Component({
  selector: 'mps-list',
  template: `
    <mps-products [products]="products$ | async" (addCart)="addCart($event)"></mps-products>
  `
})
export class ListComponent implements OnInit, OnDestroy {
  products$: Observable<Offer[]>;
  actionsSubscription: Subscription;

  constructor(
    private store: Store<fromShop.State>,
    private cartStore: Store<fromCart.State>,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.products$ = store.pipe(select(fromShop.getProducts));
    this.actionsSubscription = route.params
      .pipe(
        map(
          params =>
            params && params.slug === 'all-products'
              ? new ProductsSectionsActions.LoadProductsSections()
              : new SectionsActions.SelectSection(params.slug)
        )
      )
      .subscribe(store);
  }

  ngOnInit() {}

  addCart(item: Cart) {
    this.cartStore.dispatch(new SelectedItemPageActions.AddItem(this.cartService.cartItem(item)));
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
