import { Cart } from '@core/models/cart.model';

export interface Order {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    address: object;
    comment: string;
    items: Array<Cart>;
}
