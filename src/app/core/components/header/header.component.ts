import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() cartItems: number;

  @Output() openSearchBar = new EventEmitter();

  @Input() showMobileNav: any;
  @Output() openMobileNav = new EventEmitter();
  @Output() closeMobileNav = new EventEmitter();

  constructor() {}

  get totalItems() {
    return this.cartItems;
  }

}
