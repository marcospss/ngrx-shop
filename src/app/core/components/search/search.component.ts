import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Offer } from '@core/models/offer.model';
@Component({
  selector: 'mps-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  closeSearchBar = new EventEmitter();
  @Output()
  search = new EventEmitter<string>();
  @Input()
  query = '';
  @Input()
  error = '';
  @Input()
  result: Offer[];
  constructor() {}

  ngOnInit() {}
}
