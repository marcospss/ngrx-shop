import { LayoutActions } from './../actions';

export interface State {
  showSearchBar: boolean;
  showMobileNav: boolean;
}

const initialState: State = {
  showSearchBar: false,
  showMobileNav: false
};

export function reducer(
  state: State = initialState,
  action: LayoutActions.LayoutActionsUnion
): State {
  switch (action.type) {
    /**
     * Search Bar
     */
    case LayoutActions.LayoutActionTypes.CloseSearchBar:
      return {
        ...state,
        showSearchBar: false
      };

    case LayoutActions.LayoutActionTypes.OpenSearchBar:
      return {
        ...state,
        showSearchBar: true
      };

    /**
     * Mobile Nav
     */
    case LayoutActions.LayoutActionTypes.CloseMobileNav:
      return {
        ...state,
        showMobileNav: false
      };

    case LayoutActions.LayoutActionTypes.OpenMobileNav:
      return {
        ...state,
        showMobileNav: true
      };

    default:
      return state;
  }
}

export const getShowSearchBar = (state: State) => state.showSearchBar;

export const getShowMobileNav = (state: State) => state.showMobileNav;
