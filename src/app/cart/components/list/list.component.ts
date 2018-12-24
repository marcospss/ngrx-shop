import { Component, OnInit, Input, Output } from '@angular/core';
import { Cart } from '@core/models/cart.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'mps-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input()
  items: any;
  @Input()
  total: any;
  @Output()
  increaseQuantity = new EventEmitter<Cart>();
  @Output()
  reduceQuantity = new EventEmitter<Cart>();
  @Output()
  remove = new EventEmitter<Cart>();

  /**
   * Total Shopping Cart
   * @returns total: number
   */
  get totalCart(): number {
    let total = 0;
    this.items.map((item: Cart) => {
      total = total + item.value * item.amount;
    });
    return total;
  }

  trackByFn(index, item) {
    return item.id;
 }
}
