import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

import * as fromRoot from '@reducersRoot';
import * as fromProduct from './product.reducer';

export interface ProductState {
  product: fromProduct.State;
}

export interface State extends fromRoot.State {
  product: ProductState;
}

export const reducers: ActionReducerMap<ProductState, any> = {
  product: fromProduct.reducer
};

export const getProductState = createFeatureSelector<State, ProductState>(
  'product'
);

/**
 * Details
 */
export const getProductDetailsState = createSelector(
  getProductState,
  (state: ProductState) => state.product
);

export const getSelectProduct = createSelector(
  getProductDetailsState,
  fromProduct.getSelectProduct
);

export const getProduct = createSelector(
  getProductDetailsState,
  fromProduct.getProduct
);

export const getProductLoaded = createSelector(
  getProductDetailsState,
  fromProduct.getLoaded
);

export const getProductLoading = createSelector(
  getProductDetailsState,
  fromProduct.getLoading
);

export const getProductError = createSelector(
  getProductDetailsState,
  fromProduct.getError
);
