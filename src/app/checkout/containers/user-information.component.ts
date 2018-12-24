import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@reducersRoot';
import * as fromCheckout from './../reducers';
import { StateCountryActions, CepActions,  OrderActions } from './../actions';

import { Cart } from '@core/models/cart.model';
import * as fromCart from '@cart/reducers/cart.reducer';
import { SelectedItemPageActions } from '@cart/actions';
import { StateCountry } from '@core/models/state-country.model';
import { Address } from '@core/models/address.model';
import { Order } from '@core/models/order.model';

@Component({
  selector: 'mps-user-information',
  template: `<mps-form
    [cartItems]="cartItems$ | async"
    [stateCountry]="stateCountry$ | async"
    [addressInfo]="addressInfo$ | async"
    [orderStatus]="orderStatus$ | async"
    (userData)="userData($event)"
    (searchAddress)="searchAddress($event)"
    (clearCart)="clearCart()"
    >
  </mps-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInformationComponent implements OnInit, OnDestroy {
  cartItems$: Observable<Cart[]>;
  stateCountry$: Observable<StateCountry[]>;
  addressInfo$: Observable<Address>;
  orderStatus$: Observable<number>;
  constructor(
    private store: Store<fromRoot.State>,
    private storeCart: Store<fromCart.State>,
    private storeCheckout: Store<fromCheckout.State>
    ) {
    this.cartItems$ = storeCart.pipe(select(fromCart.selectAll));
    this.stateCountry$ = store.pipe(select(fromCheckout.getStatesCountry));
    this.addressInfo$ = store.pipe(select(fromCheckout.getCepAddress));
    this.orderStatus$ = store.pipe(select(fromCheckout.getOrderStatus));
  }

  ngOnInit() {
    this.storeCheckout.dispatch(new StateCountryActions.StateCountryLoad());
  }

  ngOnDestroy(): void {
    this.storeCheckout.dispatch(new OrderActions.SubmitOrderClear());
  }

  userData(userData: Order) {
    this.storeCheckout.dispatch(new OrderActions.SubmitOrder(userData));
  }

  clearCart(): void {
    this.storeCart.dispatch(new SelectedItemPageActions.ClearItems());
  }

  searchAddress(zipcode: string) {
    zipcode = zipcode.replace(/\D/g, '');
    if (zipcode !== '') {
      const validZipcode = /^[0-9]{8}$/;
      if (validZipcode.test(zipcode)) {
        this.storeCheckout.dispatch(new CepActions.CepZipcode(zipcode));
      }
    }
  }

}
