import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '@env/environment';

import * as fromRouter from '@ngrx/router-store';
import * as fromCart from '@cart/reducers/cart.reducer';
import * as fromLayout from '@core/reducers/layout.reducer';
import * as fromSearch from '@core/reducers/search.reducer';

export interface State {
  layout: fromLayout.State;
  router: fromRouter.RouterReducerState;
  cart: fromCart.State;
  offersSearch: fromSearch.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer,
  cart: fromCart.reducer,
  offersSearch: fromSearch.reducer
};

/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<State, fromLayout.State>(
  'layout'
);

export const getShowSearchBar = createSelector(
  getLayoutState,
  fromLayout.getShowSearchBar
);

export const getShowMobileNav = createSelector(
  getLayoutState,
  fromLayout.getShowMobileNav
);

/**
 * Cart Reducers
 */
// export const getCartState = createFeatureSelector<State, fromCart.State>('cart');


// export const getCartLoaded = createSelector(
//   getCartState,
//   fromCart.getCartLoaded
// );

// export const getCartLoading = createSelector(
//   getCartState,
//   fromCart.getCartLoading
// );

// export const getSelectItem = createSelector(
//   getCartState,
//   fromCart.getSelectItem
// );

// export const getCartItems = createSelector(getCartState, fromCart.getCartItems);

// export const isSelectedItemInCart = createSelector(
//   getCartState,
//   fromCart.getIsSelectedItemInCart
// );

/**
 * Search Reducers
 */
export const getSearchState = createFeatureSelector<State, fromSearch.State>(
  'offersSearch'
);

export const getSearchOffers = createSelector(
  getSearchState,
  fromSearch.getOffers
);

export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);

export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);

export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);

/**
 * MetaReducers
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];
