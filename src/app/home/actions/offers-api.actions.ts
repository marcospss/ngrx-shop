import { Action } from '@ngrx/store';
import { Offer } from '@core/models/offer.model';

export enum OffersApiActionsTypes {
  LoadFeatured = '[Offers/API] Load Featured',
  LoadFeaturedSuccess = '[Offers/API] Load Featured Success',
  LoadFeaturedFailure = '[Offers/API] Load Featured Failure'
}

/**
 * Load Offers Actions
 */

export class LoadFeatured implements Action {
  readonly type = OffersApiActionsTypes.LoadFeatured;
}

export class LoadFeaturedSuccess implements Action {
  readonly type = OffersApiActionsTypes.LoadFeaturedSuccess;

  constructor(public payload: Offer[]) {}
}

export class LoadFeaturedFailure implements Action {
  readonly type = OffersApiActionsTypes.LoadFeaturedFailure;

  constructor(public payload: string) {}
}

export type OffersApiActionsUnion =
  | LoadFeatured
  | LoadFeaturedSuccess
  | LoadFeaturedFailure;
