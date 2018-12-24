import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { environment } from '@env/environment';

import { RootComponent } from '@core/containers/root/root.component';

import { reducers, metaReducers } from './reducers';
import { CoreEffects } from '@core/effects/core.effects';
import { CartEffects } from '@cart/effects/cart.effects';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([CoreEffects, CartEffects]),
    StoreDevtoolsModule.instrument({
      name: '@ngrx Shop',
      logOnly: environment.production
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: APP_BASE_HREF,
      useValue: environment.baseHref
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
