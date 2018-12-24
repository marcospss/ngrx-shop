import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInformationComponent } from './containers/user-information.component';

const routes: Routes = [
  {
    path: '',
    component: UserInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
