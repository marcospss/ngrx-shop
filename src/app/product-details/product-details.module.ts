import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import {ProductEffects } from './effects/product.effects';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductComponent } from './containers/product.component';
import { SelectedProductComponent } from './containers/selected-product.component';
import { DetailsComponent } from './components/details/details.component';

const COMPONENTS = [
  ProductComponent,
  SelectedProductComponent,
  DetailsComponent
];
@NgModule({
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    StoreModule.forFeature('product', reducers),
    EffectsModule.forFeature([ProductEffects])
  ],
  declarations: COMPONENTS
})
export class ProductDetailsModule { }
