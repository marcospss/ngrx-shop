import { OrderActions } from './../actions';
import { Order } from '@core/models/order.model';

export interface State {
    order: Order;
    loading: boolean;
    status: any;
    error: string;
}

const initialState: State = {
    order: null,
    loading: false,
    status: '',
    error: ''
};

export function reducer(
  state = initialState,
  action: OrderActions.OrderApiActionsUnion
): State {
  switch (action.type) {
    case OrderActions.OrderApiActionTypes.SubmitOrder: {
      return {
        ...state,
        loading: true,
        order: action.payload
      };
    }

    case OrderActions.OrderApiActionTypes.SubmitOrderSuccess: {
      return {
        ...state,
        loading: false,
        status: action.payload
      };
    }

    case OrderActions.OrderApiActionTypes.SubmitOrderFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    case OrderActions.OrderApiActionTypes.SubmitOrderClear: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;

export const getOrder = (state: State) => state.order;

export const getStatus = (state: State) => state.status;



