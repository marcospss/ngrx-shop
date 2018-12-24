import { Action } from '@ngrx/store';
import { StateCountry } from '@core/models/state-country.model';

export enum StateCountryActionTypes {
  StateCountryLoad = '[StateCountry] StateCountry Load',
  StateCountrySuccess = '[StateCountry] StateCountry Success',
  StateCountryFailure = '[StateCountry] StateCountry Failure'
}

export class StateCountryLoad implements Action {
  readonly type = StateCountryActionTypes.StateCountryLoad;
}

export class StateCountrySuccess implements Action {
  readonly type = StateCountryActionTypes.StateCountrySuccess;

  constructor(public payload: StateCountry[]) {}
}

export class StateCountryFailure implements Action {
  readonly type = StateCountryActionTypes.StateCountryFailure;

  constructor(public payload: any) {}
}

export type StateCountryActionsUnion =
| StateCountryLoad
| StateCountrySuccess
| StateCountryFailure;
