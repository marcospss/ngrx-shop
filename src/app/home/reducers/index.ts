import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

import * as fromRoot from '@reducersRoot';
import * as fromOffersApi from './offers-api.reducer';

export interface OffersState {
  home: fromOffersApi.State;
}

export interface State extends fromRoot.State {
  home: OffersState;
}

export const reducers: ActionReducerMap<OffersState, any> = {
  home: fromOffersApi.reducer
};

export const getOffersState = createFeatureSelector<State, OffersState>('home');

/**
 * Featured
 */
export const getFeaturedState = createSelector(
  getOffersState,
  (state: OffersState) => state.home
);

export const getFeatured = createSelector(
  getFeaturedState,
  fromOffersApi.getFeatured
);

export const getFeaturedLoaded = createSelector(
  getFeaturedState,
  fromOffersApi.getLoaded
);

export const getFeaturedLoading = createSelector(
  getFeaturedState,
  fromOffersApi.getLoading
);

export const getFeaturedError = createSelector(
  getFeaturedState,
  fromOffersApi.getError
);
