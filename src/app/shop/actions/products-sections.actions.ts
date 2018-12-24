import { Action } from '@ngrx/store';
import { Sections } from '@core/models/sections.model';
import { Offer } from '@core/models/offer.model';

export enum ProductsSectionsActionsTypes {
  LoadProductsSections = '[Offers/API] Load Products Sections',
  LoadProductsSectionsSuccess = '[Offers/API] Load Products Sections Success',
  LoadProductsSectionsFailure = '[Offers/API] Load Products Sections Failure'
}

/**
 * Load Sections Products Actions
 */

export class LoadProductsSections implements Action {
  readonly type = ProductsSectionsActionsTypes.LoadProductsSections;
}

export class LoadProductsSectionsSuccess implements Action {
  readonly type = ProductsSectionsActionsTypes.LoadProductsSectionsSuccess;

  constructor(public payload: Offer[]) {}
}

export class LoadProductsSectionsFailure implements Action {
  readonly type = ProductsSectionsActionsTypes.LoadProductsSectionsFailure;

  constructor(public payload: string) {}
}

export type ProductsSectionsActionsUnion =
  | LoadProductsSections
  | LoadProductsSectionsSuccess
  | LoadProductsSectionsFailure;
