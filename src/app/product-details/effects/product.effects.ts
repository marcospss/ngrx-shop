import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { OffersService } from '@core/services/offers.service';
import { Offer } from '@core/models/offer.model';
import { ProductActions } from './../actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private offersService: OffersService
  ) {}

  @Effect()
  loadProductDetails$: Observable<Action> = this.actions$.pipe(
    ofType<ProductActions.SelectProduct>(
      ProductActions.ProductActionTypes.SelectProduct
    ),
    map(action => action.payload),
    mergeMap(selectProduct => {
      return this.offersService.getOfferBySlug(selectProduct).pipe(
        map((product: Offer) => new ProductActions.LoadProductSuccess(product)),
        catchError(error => of(new ProductActions.LoadProductFail(error)))
      );
    })
  );
}
