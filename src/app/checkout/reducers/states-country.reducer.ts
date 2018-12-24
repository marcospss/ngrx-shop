import { StateCountryActions } from './../actions';
import { StateCountry } from '@core/models/state-country.model';

export interface State {
  statesCountry: StateCountry[];
  loading: boolean;
  error: string;
}

const initialState: State = {
    statesCountry: [],
    loading: false,
    error: ''
};

export function reducer(
  state = initialState,
  action: StateCountryActions.StateCountryActionsUnion
): State {
  switch (action.type) {
    case StateCountryActions.StateCountryActionTypes.StateCountryLoad: {
      return {
        ...state,
        loading: true
      };
    }

    case StateCountryActions.StateCountryActionTypes.StateCountrySuccess: {
      return {
        ...state,
        loading: false,
        statesCountry: action.payload
      };
    }

    case StateCountryActions.StateCountryActionTypes.StateCountryFailure: {
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

export const getStatesCountry = (state: State) => state.statesCountry;



