import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { OffersEffects } from './effects/offers.effects';
import { HomeRoutingModule } from './home-routing.module';

import { FeaturedComponent } from './containers/featured.component';
import { ListComponent } from './components/list/list.component';

const COMPONENTS = [FeaturedComponent, ListComponent];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([OffersEffects])
  ],
  declarations: COMPONENTS
})
export class HomeModule {}
