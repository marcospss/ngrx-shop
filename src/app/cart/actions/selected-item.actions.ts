import { Action } from '@ngrx/store';
import { Cart } from '@core/models/cart.model';

export enum SelectedItemPageActionTypes {
  AddItem = '[Selected Item Page] Add Item',
  RemoveItem = '[Selected Item Page] Remove Item',
  UpdateItem = '[Selected Item Page] Update Item',
  ClearItems = '[Selected Item Page] Clear Items'
}

/**
 * Add Item to Collection Action
 */
export class AddItem implements Action {
  readonly type = SelectedItemPageActionTypes.AddItem;

  constructor(public payload: Cart) {}
}

export class RemoveItem implements Action {
  readonly type = SelectedItemPageActionTypes.RemoveItem;

  constructor(public payload: Cart) {}
}

export class UpdateItem implements Action {
  readonly type = SelectedItemPageActionTypes.UpdateItem;

  constructor(
    public id: string,
    public changes: Partial<Cart>
  ) {}
}

export class ClearItems implements Action {
  readonly type = SelectedItemPageActionTypes.ClearItems;
}


export type SelectedItemPageActionsUnion =
  | AddItem
  | RemoveItem
  | UpdateItem
  | ClearItems;
