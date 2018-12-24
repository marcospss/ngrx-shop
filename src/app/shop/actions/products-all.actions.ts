import { Action } from '@ngrx/store';
import { Sections } from '@core/models/sections.model';
import { Offer } from '@core/models/offer.model';

export enum ProductsAllActionsTypes {
  LoadProductsAll = '[Offers/API] Load Products All',
  LoadProductsAllSuccess = '[Offers/API] Load Products All Success',
  LoadProductsAllFailure = '[Offers/API] Load Products All Failure'
}

/**
 * Load All Products Actions
 */

export class LoadProductsAll implements Action {
  readonly type = ProductsAllActionsTypes.LoadProductsAll;
}

export class LoadProductsAllSuccess implements Action {
  readonly type = ProductsAllActionsTypes.LoadProductsAllSuccess;

  constructor(public payload: Offer[]) {}
}

export class LoadProductsAllFailure implements Action {
  readonly type = ProductsAllActionsTypes.LoadProductsAllFailure;

  constructor(public payload: string) {}
}

export type ProductsAllActionsUnion =
  | LoadProductsAll
  | LoadProductsAllSuccess
  | LoadProductsAllFailure;
