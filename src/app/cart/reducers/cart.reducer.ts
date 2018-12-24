import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SelectedItemPageActions } from './../actions';
import { Cart } from '@core/models/cart.model';
import { createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Cart> { }

export const adapter: EntityAdapter<Cart> = createEntityAdapter<Cart>();

export const initialState: State = adapter.getInitialState({
    ids: [],
    entities: {}
});

export function reducer(
    state = initialState,
    action: SelectedItemPageActions.SelectedItemPageActionsUnion
): State {
    switch (action.type) {

        case SelectedItemPageActions.SelectedItemPageActionTypes.AddItem: {
            return adapter.addOne(action.payload, state);
        }

        case SelectedItemPageActions.SelectedItemPageActionTypes.UpdateItem: {
            return adapter.updateOne({
                id: action.id,
                changes: action.changes
            }, state);
        }

        case SelectedItemPageActions.SelectedItemPageActionTypes.RemoveItem: {
            return adapter.removeOne(action.payload.id, state);
        }

        case SelectedItemPageActions.SelectedItemPageActionTypes.ClearItems: {
            return adapter.getInitialState();
        }

        default: {
            return state;
        }
    }
}

export const getCartState = createFeatureSelector<State>('cart');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adapter.getSelectors(getCartState);
