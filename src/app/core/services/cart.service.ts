import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Cart } from '@core/models/cart.model';
import { Observable, of } from 'rxjs';

export const DBNAME: string = environment.dbName;

@Injectable()
export class CartService {
  private items: Cart[] = [];

  constructor() {
    // const dbLocalStorage = localStorage.getItem(DBNAME);
    // if (dbLocalStorage) {
    //   this.items = JSON.parse(dbLocalStorage);
    // }
  }

  /**
   * Verifica e abre o LocalStorage
   */
  openDB(): void {
    const dbLocalStorage = localStorage.getItem(DBNAME);
    if (dbLocalStorage) {
      this.items = JSON.parse(dbLocalStorage);
    }
  }
  /**
   * Displays cart items
   * @returns getItems: Cart[]
   */
  getItems(): Observable<Cart[]> {
    return of(this.items);
  }

  /**
   * Add new item to cart
   * @param offer: Offer
   * @returns void
   */
  addItem(item: Cart): Observable<Cart> {
    const selected = this.cartItem(item);
    if (!(this.items.findIndex(itemCart => itemCart.id === selected.id) > -1)) {
      this.items = [...this.items, selected];
    }
    return of(selected);
    // const hasItem = this.findItemCart(offer);
    // console.log('hasItem ->', hasItem);
    // if (hasItem) {
    //   hasItem['amount'] += 1;
    //   return of(item);
    // }

    // this.updateLocalStorage();
  }

  /**
   * Increase Quantity
   * @param offer
   * @returns void
   */
  increaseQuantity(item: Cart): void {
    // const hasItem = this.findItemCart(item);
    // const selected = this.cartItem(item);
    // if (hasItem) {
    //   item.amount += 1;
    //   // this.updateLocalStorage();
    // }
  }

  /**
   * reduce item cart
   * @param offer
   * @returns void
   */
  removeItem(item: Cart): Observable<Cart> {
    const selected = this.cartItem(item);
    this.items = this.items.filter(itemCart => itemCart.id !== selected.id);
    // this.updateLocalStorage();
    return of(selected);
  }

  /**
   * reduce quantity
   * @param item
   * @returns void
   */
  reduceQuantity(item: Cart): void {
    // const selected = this.cartItem(item);
    // // const hasItem = this.findItemCart(selected);
    // if (hasItem) {
    //   item.amount -= 1;
    //   if (item.amount === 0) {
    //     this.items.splice(this.items.indexOf(selected), 1);
    //   }
    //   // this.updateLocalStorage();
    // }
  }

  /**
   * Cart Item
   * @param offer
   * @returns Cart
   */
  cartItem(item: Cart): Cart {
    return {
      id: item.id,
      cover: item.cover,
      title: item.title,
      slug: item.slug,
      description: item.description,
      value: item.value,
      amount: 1
    };
  }

  /**
   * Find Item Cart
   * @param offer
   * @returns Cart
   */
  isSelectedItemInCart(selected: string): Observable<boolean> {
    return of(this.items.findIndex(item => item.slug === selected) > -1);
  }

  private updateLocalStorage(): void {
    localStorage.setItem(DBNAME, JSON.stringify(this.items));
  }
}
