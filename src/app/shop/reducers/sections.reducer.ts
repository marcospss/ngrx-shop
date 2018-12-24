import { SectionsActions } from './../actions';
import { Sections } from '@core/models/sections.model';

export interface State {
  loaded: boolean;
  loading: boolean;
  error: string;
  sections: Sections[];
  params: string;
}

const initialState: State = {
  loaded: false,
  loading: false,
  error: '',
  sections: [],
  params: ''
};

export function reducer(
  state = initialState,
  action: SectionsActions.SectionsActionsUnion
): State {
  switch (action.type) {
    case SectionsActions.SectionsActionsTypes.SelectSection: {
      return {
        ...state,
        loading: true,
        params: action.payload
      };
    }

    case SectionsActions.SectionsActionsTypes.LoadSections: {
      return {
        ...state,
        loading: true
      };
    }

    case SectionsActions.SectionsActionsTypes.LoadSectionsSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        error: '',
        sections: action.payload
      };
    }

    case SectionsActions.SectionsActionsTypes.LoadSectionsFailure: {
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

export const getSectionsLoaded = (state: State) => state.loaded;

export const getSectionsLoading = (state: State) => state.loading;

export const getSectionsError = (state: State) => state.error;

export const getSections = (state: State) => state.sections;
