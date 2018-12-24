import { OffersApiActions } from './../actions';
import { Offer } from '@core/models/offer.model';

export interface State {
  loaded: boolean;
  loading: boolean;
  error: string;
  featured: Offer[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  error: '',
  featured: []
};

export function reducer(
  state = initialState,
  action: OffersApiActions.OffersApiActionsUnion
): State {
  switch (action.type) {
    case OffersApiActions.OffersApiActionsTypes.LoadFeatured: {
      return {
        ...state,
        loading: true
      };
    }

    case OffersApiActions.OffersApiActionsTypes.LoadFeaturedSuccess: {
      return {
        loaded: true,
        loading: false,
        error: '',
        featured: action.payload
      };
    }

    case OffersApiActions.OffersApiActionsTypes.LoadFeaturedFailure: {
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

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;

export const getFeatured = (state: State) => state.featured;
