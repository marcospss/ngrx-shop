import { ProductActions } from './../actions';
import { Offer } from '@core/models/offer.model';

export interface State {
  loaded: boolean;
  loading: boolean;
  error: string;
  selectProduct: string;
  product: Offer;
}

const initialState: State = {
  loaded: false,
  loading: false,
  error: '',
  selectProduct: '',
  product: null
};

export function reducer(
  state = initialState,
  action: ProductActions.ProductActionsUnion
): State {
  switch (action.type) {
    case ProductActions.ProductActionTypes.LoadProduct: {
      return {
        ...state,
        loading: true
      };
    }

    case ProductActions.ProductActionTypes.SelectProduct: {
      return {
        ...state,
        selectProduct: action.payload
      };
    }

    case ProductActions.ProductActionTypes.LoadProductSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        product: action.payload['0']
      };
    }

    case ProductActions.ProductActionTypes.LoadProductFail: {
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

export const getSelectProduct = (state: State) => state.selectProduct;

export const getProduct = (state: State) => state.product;
