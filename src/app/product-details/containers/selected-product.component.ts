import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Offer } from '@core/models/offer.model';
import { Cart } from '@core/models/cart.model';
import { CartService } from '@core/services/cart.service';
import * as fromProduct from './../reducers';
import * as fromCart from '@cart/reducers/cart.reducer';
import { SelectedItemPageActions } from '@cart/actions';

@Component({
  selector: 'mps-selected-product',
  template: `
      <mps-details
        [productDetails]="productDetails$ | async"
        [inCart]="isItemInCart$ | async"
        (addItem)="addItem($event)"
        (removeItem)="removeItem($event)"
      >
      </mps-details>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedProductComponent {
  productDetails$: Observable<Offer>;
  isItemInCart$: Observable<any[]>;
  constructor(
    private store: Store<fromProduct.State>,
    private cartStore: Store<fromCart.State>,
    private cartService: CartService
  ) {
    this.productDetails$ = store.pipe(select(fromProduct.getProduct));
    this.isItemInCart$ = cartStore.pipe(select(fromCart.selectIds));
  }

  addItem(item: Cart) {
    this.cartStore.dispatch(new SelectedItemPageActions.AddItem(this.cartService.cartItem(item)));
  }

  removeItem(item: Cart) {
    this.cartStore.dispatch(new SelectedItemPageActions.RemoveItem(item));
  }

}
