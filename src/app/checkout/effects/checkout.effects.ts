import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { StatesService } from '@core/services/states.service';
import { CepSearchService } from '@core/services/cep-search.service';
import { OrderService } from '@core/services/order.service';

import { StateCountry } from '@core/models/state-country.model';
import { Address } from '@core/models/address.model';
import { Order } from '@core/models/order.model';

import { StateCountryActions, CepActions, OrderActions } from './../actions';

@Injectable()
export class CheckoutEffects {

    constructor(
        private actions$: Actions,
        private statesService: StatesService,
        private cepSearchService: CepSearchService,
        private orderService: OrderService,
        ) {}

    @Effect()
    loadStates$: Observable<Action> = this.actions$.pipe(
        ofType(StateCountryActions.StateCountryActionTypes.StateCountryLoad),
        switchMap(() =>
            this.statesService.getStatesBr().pipe(
                map((statesBR: StateCountry[]) => new StateCountryActions.StateCountrySuccess(statesBR)),
                catchError(error => of(new StateCountryActions.StateCountryFailure(error)))
            )
        )
    );

    @Effect()
    searchAddress$: Observable<Action> = this.actions$.pipe(
        ofType<CepActions.CepZipcode>(CepActions.CepApiActionTypes.CepZipcode),
        map(action => action.payload),
        mergeMap((zipcode: string) => {
            return this.cepSearchService.search(zipcode).pipe(
                map((address: Address) => new CepActions.CepAddressSuccess(address)),
                catchError(error => of(new CepActions.CepAddressFailure(error)))
            );
        })
    );

    @Effect()
    submitOrder$: Observable<Action> = this.actions$.pipe(
        ofType<OrderActions.SubmitOrder>(OrderActions.OrderApiActionTypes.SubmitOrder),
        map(action => action.payload),
        mergeMap((order: Order) =>
            this.orderService.requestCompleted(order).pipe(
                map((status: any) => new OrderActions.SubmitOrderSuccess(status.id)),
                catchError(error => of(new OrderActions.SubmitOrderFailure(error)))
            )
        )
    );
}
