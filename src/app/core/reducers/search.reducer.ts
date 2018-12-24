import { SearchActions } from './../actions';
import { Offer } from './../models/offer.model';

export interface State {
  offers: Offer[];
  loading: boolean;
  error: string;
  query: string;
}

const initialState: State = {
  offers: [],
  loading: false,
  error: '',
  query: ''
};

export function reducer(
  state = initialState,
  action: SearchActions.SearchActionsUnion
): State {
  switch (action.type) {
    case SearchActions.SearchActionTypes.SearchOffers: {
      const query = action.payload;

      if (query === '' || null) {
        return {
          offers: [],
          loading: false,
          error: '',
          query
        };
      }
      return {
        ...state,
        loading: true,
        error: '',
        query
      };
    }

    case SearchActions.SearchActionTypes.SearchSuccess: {
      return {
        offers: action.payload,
        loading: false,
        error: '',
        query: ''
      };
    }

    case SearchActions.SearchActionTypes.SearchFailure: {
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

export const getOffers = (state: State) => state.offers;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
