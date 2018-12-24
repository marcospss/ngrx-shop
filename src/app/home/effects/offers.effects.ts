import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { OffersService } from '@core/services/offers.service';
import { Offer } from '@core/models/offer.model';
import { OffersApiActions } from './../actions';

@Injectable()
export class OffersEffects {
  constructor(
    private actions$: Actions,
    private offersService: OffersService
  ) {}

  @Effect()
  loadOffers$: Observable<Action> = this.actions$.pipe(
    ofType(OffersApiActions.OffersApiActionsTypes.LoadFeatured),
    switchMap(() =>
      this.offersService.getFeaturedOffers().pipe(
        map(
          (offers: Offer[]) => new OffersApiActions.LoadFeaturedSuccess(offers)
        ),
        catchError(error => of(new OffersApiActions.LoadFeaturedFailure(error)))
      )
    )
  );
}
