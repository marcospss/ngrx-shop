import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromProduct from './../reducers';
import { ProductActions } from './../actions';
@Component({
  selector: 'mps-product',
  template: `<mps-selected-product></mps-selected-product>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor(store: Store<fromProduct.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params.pipe(
      map(params => new ProductActions.SelectProduct(params.slug))
    ).subscribe(store);
   }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

}
