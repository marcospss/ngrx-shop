import { Action } from '@ngrx/store';
import { Sections } from '@core/models/sections.model';
import { Offer } from '@core/models/offer.model';

export enum SectionsActionsTypes {
  SelectSection = '[Offers/API] Select Section',
  LoadSections = '[Offers/API] Load Sections',
  LoadSectionsSuccess = '[Offers/API] Load Sections Success',
  LoadSectionsFailure = '[Offers/API] Load Sections Failure'
}

/**
 * Load Sections Actions
 */

export class SelectSection implements Action {
  readonly type = SectionsActionsTypes.SelectSection;

  constructor(public payload: string) {}
}

export class LoadSections implements Action {
  readonly type = SectionsActionsTypes.LoadSections;
}

export class LoadSectionsSuccess implements Action {
  readonly type = SectionsActionsTypes.LoadSectionsSuccess;

  constructor(public payload: Sections[]) {}
}

export class LoadSectionsFailure implements Action {
  readonly type = SectionsActionsTypes.LoadSectionsFailure;

  constructor(public payload: string) {}
}

export type SectionsActionsUnion =
  | SelectSection
  | LoadSections
  | LoadSectionsSuccess
  | LoadSectionsFailure;
