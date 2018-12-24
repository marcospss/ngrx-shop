// import {
//   createSelector,
//   createFeatureSelector,
//   ActionReducerMap
// } from '@ngrx/store';

// import * as fromRoot from '@reducersRoot';
// import * as fromCart from './cart.reducer';

// export interface CartState {
//   items: fromCart.State;
// }
// export interface State extends fromRoot.State {
//   cart: CartState;
// }

// export const reducers: ActionReducerMap<CartState, any> = {
//   items: fromCart.reducer
// };

// export const getCartState = createFeatureSelector<State, CartState>('cart');

// export const getItemsState = createSelector(
//   getCartState,
//   (state: CartState) => state.items
// );

// export const getCartLoaded = createSelector(
//   getItemsState,
//   fromCart.getCartLoaded
// );

// export const getCartLoading = createSelector(
//   getItemsState,
//   fromCart.getCartLoading
// );

// export const getSelectItem = createSelector(
//   getItemsState,
//   fromCart.getSelectItem
// );

// export const getCartItems = createSelector(
//   getItemsState,
//   fromCart.getCartItems
// );
