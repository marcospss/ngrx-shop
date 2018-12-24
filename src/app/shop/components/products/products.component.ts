import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Offer } from '@core/models/offer.model';

@Component({
  selector: 'mps-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input()
  products: Offer;
  @Output()
  addCart = new EventEmitter<Offer>();
  constructor() {}

  ngOnInit() {}
}
