import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { reducers } from './reducers';
import { CartEffects } from './effects/cart.effects';
import { CartRoutingModule } from './cart-routing.module';
import { ProductsComponent } from './containers/products.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [ProductsComponent, ListComponent]
})
export class CartModule {}
