import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromCart from '@cart/reducers/cart.reducer';
import { SelectedItemPageActions } from '@cart/actions';
import { Cart } from '@core/models/cart.model';
import { StateCountry} from '@core/models/state-country.model';
import { Address } from '@core/models/address.model';
@Component({
  selector: 'mps-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnChanges {

  @Input() cartItems: Cart[];
  @Input() stateCountry: StateCountry[];
  @Input() addressInfo: Address;
  @Input() orderStatus: any;
  @Output() userData = new EventEmitter<any>();
  @Output() searchAddress = new EventEmitter<any>();
  @Output() clearCart = new EventEmitter<any>();
  formCheckout: FormGroup;
  checkFormInvalid = false;

  constructor(
    private formBuilder: FormBuilder,
    private storeCart: Store<fromCart.State>,
    private router: Router
    ) {
    this.formCheckout = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      company: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      comment: [null],
      address: this.formBuilder.group({
        country: [null, Validators.required],
        city: [null, Validators.required],
        streetAddress: [null, Validators.required],
        zipCode: [null, Validators.required],
        complement: [null]
      }),
    });
  }

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.addressInfo && this.addressInfo.uf) {
      this.fetchAddressInfo();
    }
    if (this.orderStatus) {
      window.scrollTo(0, 0);
      // this.clearCart.emit();
    }
  }

  /**
   * Total Shopping Cart
   * @returns total: number
   */
  get totalCart(): number {
    let total = 0;
    this.cartItems.map((item: Cart) => {
      total = total + item.value * item.amount;
    });
    return total;
  }

  checkValidInput(input: string) {
    return (
      !this.formCheckout.get(input).valid && ( this.formCheckout.get(input).dirty || this.formCheckout.get(input).touched )
    );
  }

  checkEmailValid() {
    const inputEmail = this.formCheckout.get('email');
    if (inputEmail.errors) {
      return inputEmail.errors['email'] && inputEmail.touched;
    }
  }

  fetchAddressInfo() {
    this.formCheckout.patchValue({
      address: {
        streetAddress: this.addressInfo.logradouro,
        country: this.addressInfo.uf,
        city: this.addressInfo.localidade
      }
    });
  }
  onSubmit() {
    this.checkFormInvalid = this.formCheckout.invalid;
    if (this.checkFormInvalid) {
      return;
    }
    const checkoutData = {
      user: this.formCheckout.getRawValue(),
      cartItems: this.cartItems
    };
    this.clearCart.emit();
    this.userData.emit(checkoutData);
  }
}
