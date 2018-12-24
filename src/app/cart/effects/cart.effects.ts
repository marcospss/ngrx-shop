import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { defer, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, toArray } from 'rxjs/operators';

import { CartService } from '@core/services/cart.service';
import { Offer } from '@core/models/offer.model';
import { Cart } from '@core/models/cart.model';

import {
  CartApiActions,
  CartPageActions,
  SelectedItemPageActions
} from './../actions';
import { ProductActions } from '@productDetails/actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.cartService.openDB();
  });

  @Effect()
  loadItems$: Observable<Action> = this.actions$.pipe(
    ofType(CartPageActions.CartPageActionTypes.LoadCart),
    switchMap(() =>
      this.cartService.getItems().pipe(
        map((items: Cart[]) => new CartApiActions.LoadItemsSuccess(items)),
        catchError(error => of(new CartApiActions.LoadItemsFailure(error)))
      )
    )
  );

  @Effect()
  addItem$: Observable<Action> = this.actions$.pipe(
    ofType<SelectedItemPageActions.AddItem>(
      SelectedItemPageActions.SelectedItemPageActionTypes.AddItem
    ),
    map(action => action.payload),
    mergeMap(item =>
      this.cartService.addItem(item).pipe(
        map((itemCart: Cart) => new CartApiActions.AddItemSuccess(itemCart)),
        catchError(error => of(new CartApiActions.AddItemFailure(error)))
      )
    )
  );

  @Effect()
  removeItemt$: Observable<Action> = this.actions$.pipe(
    ofType<SelectedItemPageActions.RemoveItem>(
      SelectedItemPageActions.SelectedItemPageActionTypes.RemoveItem
    ),
    map(action => action.payload),
    mergeMap(item =>
      this.cartService.removeItem(item).pipe(
        map((itemCart: Cart) => new CartApiActions.RemoveItemSuccess(itemCart)),
        catchError(error => of(new CartApiActions.RemoveItemFailure(error)))
      )
    )
  );
}
