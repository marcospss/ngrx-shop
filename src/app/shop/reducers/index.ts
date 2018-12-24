import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

import * as fromRoot from '@reducersRoot';
import * as fromSections from './sections.reducer';
import * as fromProducts from './products.reducer';

export interface ShopState {
  sections: fromSections.State;
  products: fromProducts.State;
}

export interface State extends fromRoot.State {
  shop: ShopState;
  products: ShopState;
}

export const reducers: ActionReducerMap<ShopState, any> = {
  sections: fromSections.reducer,
  products: fromProducts.reducer
};

export const getShopState = createFeatureSelector<State, ShopState>('shop');

/**
 * Sections
 */
export const getSectionsState = createSelector(
  getShopState,
  (state: ShopState) => state.sections
);

export const getSections = createSelector(
  getSectionsState,
  fromSections.getSections
);

export const getSectionsLoading = createSelector(
  getSectionsState,
  fromSections.getSectionsLoading
);

export const getSectionsLoaded = createSelector(
  getSectionsState,
  fromSections.getSectionsLoaded
);

export const getSectionsError = createSelector(
  getSectionsState,
  fromSections.getSectionsError
);

/**
 * Products
 */
export const getProductsState = createSelector(
  getShopState,
  (state: ShopState) => state.products
);

export const getProducts = createSelector(
  getProductsState,
  fromProducts.getProducts
);

export const getProductsLoading = createSelector(
  getProductsState,
  fromProducts.getProductsLoading
);

export const getProductsLoaded = createSelector(
  getProductsState,
  fromProducts.getProductsLoaded
);

export const getProductsError = createSelector(
  getProductsState,
  fromProducts.getProductsError
);
