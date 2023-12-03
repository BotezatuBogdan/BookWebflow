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

  selectedTabIndex: number = 0;
  maxNumberOfTabs: number = 2;
  
  nextStep() {
    if (this.selectedTabIndex != this.maxNumberOfTabs) {
      this.selectedTabIndex = this.selectedTabIndex + 1;
    }
  }

  previousStep() {
    if (this.selectedTabIndex != 0) {
      this.selectedTabIndex = this.selectedTabIndex - 1;
    }
  }
}
