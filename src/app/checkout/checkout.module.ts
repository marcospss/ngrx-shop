import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { CheckoutEffects } from './effects/checkout.effects';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { UserInformationComponent } from './containers/user-information.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('checkout', reducers),
    EffectsModule.forFeature([CheckoutEffects])
  ],
  declarations: [UserInformationComponent, FormComponent]
})
export class CheckoutModule { }
