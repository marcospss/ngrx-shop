import { Action } from '@ngrx/store';
import { Offer } from '@core/models/offer.model';

export enum ProductActionTypes {
  LoadProduct = '[Product] Load Product',
  LoadProductSuccess = '[Product] Load Product Success',
  LoadProductFail = '[Product] Load Product Fail',
  SelectProduct = '[Product] Select Product'
}

export class LoadProduct implements Action {
  readonly type = ProductActionTypes.LoadProduct;
}

export class LoadProductSuccess implements Action {
  readonly type = ProductActionTypes.LoadProductSuccess;

  constructor(public payload: Offer) {}
}

export class LoadProductFail implements Action {
  readonly type = ProductActionTypes.LoadProductFail;

  constructor(public payload: string) {}
}

export class SelectProduct implements Action {
  readonly type = ProductActionTypes.SelectProduct;

  constructor(public payload: string) {}
}

export type ProductActionsUnion =
  | LoadProduct
  | LoadProductSuccess
  | LoadProductFail
  | SelectProduct;
