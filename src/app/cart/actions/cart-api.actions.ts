import { Action } from '@ngrx/store';
import { Cart } from '@core/models/cart.model';

export enum CartApiActionTypes {
  AddItemSuccess = '[Cart/API] Add Item Success',
  AddItemFailure = '[Cart/API] Add Item Failure',
  RemoveItemSuccess = '[Cart/API] Remove Item Success',
  RemoveItemFailure = '[Cart/API] Remove Item Failure',
  LoadItemsSuccess = '[Cart/API] Load Items Success',
  LoadItemsFailure = '[Cart/API] Load Items Failure'
}

/**
 * Add Item to Cart Actions
 */

export class AddItemSuccess implements Action {
  readonly type = CartApiActionTypes.AddItemSuccess;

  constructor(public payload: Cart) {}
}

export class AddItemFailure implements Action {
  readonly type = CartApiActionTypes.AddItemFailure;

  constructor(public payload: any) {}
}

/**
 * Remove Item from Cart Actions
 */

export class RemoveItemSuccess implements Action {
  readonly type = CartApiActionTypes.RemoveItemSuccess;

  constructor(public payload: Cart) {}
}

export class RemoveItemFailure implements Action {
  readonly type = CartApiActionTypes.RemoveItemFailure;

  constructor(public payload: any) {}
}

/**
 * Load Cart Actions
 */
export class LoadItemsSuccess implements Action {
  readonly type = CartApiActionTypes.LoadItemsSuccess;

  constructor(public payload: Cart[]) {}
}

export class LoadItemsFailure implements Action {
  readonly type = CartApiActionTypes.LoadItemsFailure;

  constructor(public payload: any) {}
}

export type CartApiActionsUnion =
  | AddItemSuccess
  | AddItemFailure
  | RemoveItemSuccess
  | RemoveItemFailure
  | LoadItemsSuccess
  | LoadItemsFailure;
