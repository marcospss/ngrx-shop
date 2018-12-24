import { CepActions } from './../actions';
import { Address } from '@core/models/address.model';

export interface State {
    address: Address;
    zipcode: string;
    loading: boolean;
    error: string;
}

const initialState: State = {
    address: null,
    zipcode: '',
    loading: false,
    error: ''
};

export function reducer(
  state = initialState,
  action: CepActions.CepApiActionsUnion
): State {
  switch (action.type) {
    case CepActions.CepApiActionTypes.CepZipcode: {
      return {
        ...state,
        loading: true,
        zipcode: action.payload
      };
    }

    case CepActions.CepApiActionTypes.CepAddressSuccess: {
      return {
        ...state,
        loading: false,
        address: action.payload
      };
    }

    case CepActions.CepApiActionTypes.CepAddressFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;

export const getZipcode = (state: State) => state.zipcode;

export const getAddress = (state: State) => state.address;



