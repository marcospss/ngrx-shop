import { Action } from '@ngrx/store';
import { Order } from '@core/models/order.model';

export enum OrderApiActionTypes {
  SubmitOrder = '[Checkout/API] Send Order Success',
  SubmitOrderSuccess = '[Checkout/API] Add Order Success',
  SubmitOrderFailure = '[Checkout/API] Add Order Failure',
  SubmitOrderClear = '[Checkout/API] Clear Order'
}

/**
 * Add Order to Checkout Actions
 */

export class SubmitOrder implements Action {
  readonly type = OrderApiActionTypes.SubmitOrder;

  constructor(public payload: Order) {}
}
export class SubmitOrderSuccess implements Action {
  readonly type = OrderApiActionTypes.SubmitOrderSuccess;

  constructor(public payload: any) {}
}

export class SubmitOrderFailure implements Action {
  readonly type = OrderApiActionTypes.SubmitOrderFailure;

  constructor(public payload: any) {}
}

export class SubmitOrderClear implements Action {
  readonly type = OrderApiActionTypes.SubmitOrderClear;
}

export type OrderApiActionsUnion =
  | SubmitOrder
  | SubmitOrderSuccess
  | SubmitOrderFailure
  | SubmitOrderClear;
