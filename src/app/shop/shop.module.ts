import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { ShopEffects } from './effects/shop.effects';
import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './containers/home.component';
import { ListComponent } from './containers/list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    StoreModule.forFeature('shop', reducers),
    EffectsModule.forFeature([ShopEffects])
  ],
  declarations: [
    HomeComponent,
    ProductsComponent,
    SidebarComponent,
    ListComponent
  ]
})
export class ShopModule {}
