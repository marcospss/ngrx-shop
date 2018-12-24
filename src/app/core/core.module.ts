import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RootComponent } from './containers/root/root.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';

import { OffersService } from './services/offers.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { CepSearchService } from './services/cep-search.service';
import { StatesService } from './services/states.service';
import { LoadingService } from './services/loading.service';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

const COMPONENTS = [
  RootComponent,
  NotFoundPageComponent,
  LoadingAnimationComponent,
  SearchComponent,
  NewsletterComponent,
  HeaderComponent,
  FooterComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    LoadingService,
    OffersService,
    CartService,
    OrderService,
    CepSearchService,
    StatesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
