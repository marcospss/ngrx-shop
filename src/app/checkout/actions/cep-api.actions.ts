import { Action } from '@ngrx/store';
import { Address } from '@core/models/address.model';

export enum CepApiActionTypes {
    CepZipcode = '[CEP/API] CEP Zipcode',
    CepAddressSuccess = '[CEP/API] CEP Address Success',
    CepAddressFailure = '[CEP/API] CEP Address Failure'
}

export class CepZipcode implements Action {
    readonly type = CepApiActionTypes.CepZipcode;

    constructor(public payload: string) {}
  }

export class CepAddressSuccess implements Action {
  readonly type = CepApiActionTypes.CepAddressSuccess;

  constructor(public payload: Address) {}
}

export class CepAddressFailure implements Action {
  readonly type = CepApiActionTypes.CepAddressFailure;

  constructor(public payload: any) {}
}

export type CepApiActionsUnion =
| CepZipcode
| CepAddressSuccess
| CepAddressFailure;
