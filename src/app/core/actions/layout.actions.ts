import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSearchBar = '[Layout] Open SearchBar',
  CloseSearchBar = '[Layout] Close SearchBar',
  OpenMobileNav = '[Layout] Open Mobile Nav',
  CloseMobileNav = '[Layout] Close Mobile Nav',
}

/**
 * Search Bar
 */
export class OpenSearchBar implements Action {
  readonly type = LayoutActionTypes.OpenSearchBar;
}

export class CloseSearchBar implements Action {
  readonly type = LayoutActionTypes.CloseSearchBar;
}

/**
 * Mobile Nav
 */
export class OpenMobileNav implements Action {
  readonly type = LayoutActionTypes.OpenMobileNav;
}

export class CloseMobileNav implements Action {
  readonly type = LayoutActionTypes.CloseMobileNav;
}

export type LayoutActionsUnion =
  | OpenSearchBar
  | CloseSearchBar
  | OpenMobileNav
  | CloseMobileNav;
