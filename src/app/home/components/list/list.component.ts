import { Component, Input } from '@angular/core';
import { Offer } from '@core/models/offer.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[mps-list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input()
  offers: Offer[];
}
