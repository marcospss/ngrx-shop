import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { OffersService } from '@core/services/offers.service';
import { Offer } from '@core/models/offer.model';
import { SearchActions } from './../actions';

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
    private offersService: OffersService
  ) {}

  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType<SearchActions.SearchOffers>(SearchActions.SearchActionTypes.SearchOffers),
    map(action => action.payload),
    mergeMap(query => {
      return this.offersService.searchOffers(query).pipe(
        map((offers: Offer[]) => new SearchActions.SearchSuccess(offers)),
        catchError(err => of(new SearchActions.SearchFailure(err)))
      );
    })
  );

}
