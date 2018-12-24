import { ProductsAllActions, ProductsSectionsActions } from './../actions';
import { Offer } from '@core/models/offer.model';

export interface State {
  loaded: boolean;
  loading: boolean;
  error: string;
  start: number;
  end: number;
  sort: string;
  order: string;
  products: Offer[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  error: '',
  start: 0,
  end: 6,
  sort: '',
  order: '',
  products: []
};

export function reducer(
  state = initialState,
  action:
    | ProductsAllActions.ProductsAllActionsUnion
    | ProductsSectionsActions.ProductsSectionsActionsUnion
): State {
  switch (action.type) {
    case ProductsAllActions.ProductsAllActionsTypes.LoadProductsAll:
    case ProductsSectionsActions.ProductsSectionsActionsTypes
      .LoadProductsSections: {
      return {
        ...state,
        loading: true
      };
    }

    case ProductsAllActions.ProductsAllActionsTypes.LoadProductsAllSuccess:
    case ProductsSectionsActions.ProductsSectionsActionsTypes
      .LoadProductsSectionsSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        error: '',
        products: action.payload
      };
    }

    case ProductsAllActions.ProductsAllActionsTypes.LoadProductsAllFailure:
    case ProductsSectionsActions.ProductsSectionsActionsTypes
      .LoadProductsSectionsFailure: {
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

export const getProductsLoaded = (state: State) => state.loaded;

export const getProductsLoading = (state: State) => state.loading;

export const getProductsError = (state: State) => state.error;

export const getProducts = (state: State) => state.products;
