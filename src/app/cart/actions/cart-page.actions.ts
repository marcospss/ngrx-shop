import { Action } from '@ngrx/store';

export enum CartPageActionTypes {
  LoadCart = '[Cart Page] Load Cart'
}

/**
 * Load Collection Action
 */
export class LoadCart implements Action {
  readonly type = CartPageActionTypes.LoadCart;
}

export type CartPageActionsUnion = LoadCart;
