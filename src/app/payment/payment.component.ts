import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartDbService } from '../services/cart-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {

  isShippingAddressFormValid = false;

  selectedTabIndex: number = 0;
  maxNumberOfTabs: number = 2;
  
  onNext(event: any): void {
    if (this.selectedTabIndex != this.maxNumberOfTabs) {
      this.selectedTabIndex = this.selectedTabIndex + 1;
    }
  }

  onPrevious(event: any): void {
    if (this.selectedTabIndex != 0) {
      this.selectedTabIndex = this.selectedTabIndex - 1;
    }
  }

  handleFormValid(valid: boolean): void {
    // Update the form validity status for the shipping address tab
    this.isShippingAddressFormValid = valid;
  }
}
