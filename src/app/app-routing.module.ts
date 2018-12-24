import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '@core/containers/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'shop',
    loadChildren: './shop/shop.module#ShopModule'
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule'
  },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule'
  },
  {
    path: ':slug',
    loadChildren:
      './product-details/product-details.module#ProductDetailsModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
