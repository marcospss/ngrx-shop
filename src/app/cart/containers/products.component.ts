import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCart from './../reducers/cart.reducer';
import { CartPageActions } from './../actions';
import { Cart } from '@core/models/cart.model';
import { SelectedItemPageActions } from '@cart/actions';
@Component({
  selector: 'mps-products',
  template: `<mps-list
      [items]="items$ | async"
      (increaseQuantity)="increaseQuantity($event)"
      (reduceQuantity)="reduceQuantity($event)"
      (remove)="remove($event)"
      >
    </mps-list>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  items$: Observable<Cart[]>;
  total$: Observable<any>;
  constructor(private store: Store<fromCart.State>) {
    this.items$ = store.pipe(select(fromCart.selectAll));
  }

  ngOnInit() {
    // this.store.dispatch(new CartPageActions.LoadCart());
  }

  increaseQuantity(item: Cart) {
    this.store.dispatch(new SelectedItemPageActions.UpdateItem(item.id, {
      amount: (item.amount) + 1
    }));
  }

  reduceQuantity(item: Cart) {
    this.store.dispatch(new SelectedItemPageActions.UpdateItem(item.id, {
      amount: (item.amount) - 1
    }));
  }

  remove(item: Cart) {
    this.store.dispatch(new SelectedItemPageActions.RemoveItem(item));
  }
}
