import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

import * as fromRoot from '@reducersRoot';
import * as fromStatesCountry from './states-country.reducer';
import * as fromCep from './cep.reducer';
import * as fromOrder from './order.reducer';

export interface CheckoutState {
    statesCountry: fromStatesCountry.State;
    address: fromCep.State;
    order: fromOrder.State;
}
export interface State extends fromRoot.State {
    checkout: CheckoutState;
}

export const reducers: ActionReducerMap<CheckoutState, any> = {
    statesCountry: fromStatesCountry.reducer,
    address: fromCep.reducer,
    order: fromOrder.reducer
};

export const getCheckoutState = createFeatureSelector<State, CheckoutState>('checkout');

/**
 * States Country
 */
export const getStateCountry = createSelector(
  getCheckoutState,
  (state: CheckoutState) => state.statesCountry
);

export const getStatesCountryLoading = createSelector(
  getStateCountry,
  fromStatesCountry.getLoading
);

export const getStatesCountryError = createSelector(
  getStateCountry,
  fromStatesCountry.getError
);

export const getStatesCountry = createSelector(
  getStateCountry,
  fromStatesCountry.getStatesCountry
);

/**
 * CEP
 */
export const getStateCep = createSelector(
    getCheckoutState,
    (state: CheckoutState) => state.address
);

export const getCepLoading = createSelector(
    getStateCep,
    fromCep.getLoading
);

export const getCepError = createSelector(
    getStateCep,
    fromCep.getError
);

export const getCepAddress = createSelector(
    getStateCep,
    fromCep.getAddress
);

/**
 * Order
 */
export const getStateOrder = createSelector(
    getCheckoutState,
    (state: CheckoutState) => state.order
);

export const getOrderLoading = createSelector(
    getStateOrder,
    fromOrder.getLoading
);

export const getOrderError = createSelector(
    getStateOrder,
    fromOrder.getError
);

export const getOrder = createSelector(
    getStateOrder,
    fromOrder.getOrder
);

export const getOrderStatus = createSelector(
    getStateOrder,
    fromOrder.getStatus
);
