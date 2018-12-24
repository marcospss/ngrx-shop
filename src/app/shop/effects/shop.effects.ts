import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';

import { OffersService } from '@core/services/offers.service';
import { Sections } from '@core/models/sections.model';
import { Offer } from '@core/models/offer.model';
import {
  SectionsActions,
  ProductsSectionsActions,
  ProductsAllActions
} from './../actions';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private offersService: OffersService
  ) {}

  @Effect()
  loadAllSections$: Observable<Action> = this.actions$.pipe(
    ofType(SectionsActions.SectionsActionsTypes.LoadSections),
    switchMap(() =>
      this.offersService.getAllSections().pipe(
        map(
          (sections: Sections[]) =>
            new SectionsActions.LoadSectionsSuccess(sections)
        ),
        catchError(error => of(new SectionsActions.LoadSectionsFailure(error)))
      )
    )
  );

  @Effect()
  loadAllProducts$: Observable<Action> = this.actions$.pipe(
    ofType(
      ProductsSectionsActions.ProductsSectionsActionsTypes.LoadProductsSections
    ),
    switchMap(() =>
      this.offersService.getAllOffers().pipe(
        map(
          (products: Offer[]) =>
            new ProductsSectionsActions.LoadProductsSectionsSuccess(products)
        ),
        catchError(error =>
          of(new ProductsSectionsActions.LoadProductsSectionsFailure(error))
        )
      )
    )
  );

  @Effect()
  getProductsByCategory$: Observable<Action> = this.actions$.pipe(
    ofType<SectionsActions.SelectSection>(
      SectionsActions.SectionsActionsTypes.SelectSection
    ),
    map(action => action.payload),
    mergeMap(params => {
      return this.offersService.getOffersByCategory(params).pipe(
        map(
          (products: any) =>
            new ProductsSectionsActions.LoadProductsSectionsSuccess(products)
        ),
        catchError(error =>
          of(new ProductsSectionsActions.LoadProductsSectionsFailure(error))
        )
      );
    })
  );
}
