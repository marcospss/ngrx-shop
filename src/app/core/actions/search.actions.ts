import { Action } from '@ngrx/store';
import { Offer } from './../models/offer.model';

export enum SearchActionTypes {
    SearchOffers = '[Offers/API] Search Offers',
    SearchSuccess = '[Offers/API] Search Success',
    SearchFailure = '[Offers/API] Search Failure'
}

export class SearchOffers implements Action {
    readonly type = SearchActionTypes.SearchOffers;

    constructor(public payload: string) {}
  }

export class SearchSuccess implements Action {
  readonly type = SearchActionTypes.SearchSuccess;

  constructor(public payload: Offer[]) {}
}

export class SearchFailure implements Action {
  readonly type = SearchActionTypes.SearchFailure;

  constructor(public payload: string) {}
}

export type SearchActionsUnion =
| SearchOffers
| SearchSuccess
| SearchFailure;
