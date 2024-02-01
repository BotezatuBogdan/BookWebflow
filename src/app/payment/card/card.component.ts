import { Component, EventEmitter, OnDestroy, OnInit, Output, } from '@angular/core';
import { StripeService } from 'src/app/services/stripe.service';
import { Subscription } from 'rxjs';
import { CartDbService } from 'src/app/services/cart-db.service';
import { ShipmentPriceService } from 'src/app/services/shipment-price.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { group } from '@angular/animations';
import { Stripe } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})



export class CardComponent implements OnInit, OnDestroy {
  [x: string]: any;

  //private stripePromise = loadStripe('pk_live_51ONuR6H8GiaEbc25PnZqOu4dH1JWPmBBdfA5DroOiVHTQCkpQ9L1tDYRU4kYySlz5kSwsYbwz8VbKDgQzDVrvUeV00aTUcJK4Z');
  private stripePromise = loadStripe('pk_test_51OLMMhIDXc9qzD2OeLmgFCQ9UMoirR6NcFUD4EZvOHUXttvVZBATE93XmQLfU7pw9rUSZ2yNKKMyot8etnCtrCWe00D6q74OW0');

  @Output() previous = new EventEmitter<void>();


  deliveryPrice = 0;
  deliveryType = '';
  cartItems: any[] = [];
  sum: number = 0;
  displayedColumns: string[] = ['Title', 'Quantity', 'Price'];
  tableItems: { position: number, title: string, quantity: string, price: number }[] = [];
  mergedRows: any[] = [];

  voucher: string = "";

  private cartSubscription!: Subscription;
  private deliveryDetailsSubscription!: Subscription;
  deliveryDetails: any;

  cardCaptureReady = false;

  stripe!: Stripe;
  
  constructor(private formBuilder: FormBuilder, private cartDB: CartDbService, private deliveryService: ShipmentPriceService, private router: Router) {

  }

  ngOnInit() {

    this.cartItems = this.cartDB.getCart();

    this.cartSubscription = this.cartDB.getCartItemsObservable().subscribe((updatedCartItems) => {
      this.cartItems = updatedCartItems;
      this.updateTableItems();
    });

    this.deliveryDetailsSubscription = this.deliveryService.deliveryDetailsObservable.subscribe((details) => {
      this.deliveryDetails = details;

      if (this.deliveryDetails) {

        this.deliveryType = details.deliveryType;

        if (details.deliveryPrice === '$5.99' || details.deliveryPrice === '$9.99') {
          let originalString = details.deliveryPrice;
          let stringWithoutFirstCharacter = originalString.substring(1);
          this.deliveryPrice = parseFloat(stringWithoutFirstCharacter);
        } else {
          this.deliveryPrice = 0;
        }

      }

      this.updateTableItems();
    });

  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  private updateTableItems(): void {
    this.tableItems = [];
    this.sum = 0;

    this.cartItems.forEach((element, index) => {
      let obj = {
        position: (index + 1),
        title: element.title,
        quantity: element.quantity,
        price: element.price,
      }

      if (obj.price > 1) {
        obj.price = obj.quantity * obj.price;
      }

      this.sum += obj.price;
      this.tableItems.push(obj);
    });
    this.sum += this.deliveryPrice;
  }


  previousStep(): void {
    this.previous.emit();
  }

  async createPaymentIntent(amount: number): Promise<string> {
    const stripe = await this.stripePromise;
    const response = await fetch('http://localhost:8085/stripe/create-payment-link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ unit_amount: amount, currency: 'usd' }),
    });
  
    const { clientSecret } = await response.json();
    return clientSecret;
  }

  handlePayment() {
    this.createPaymentIntent(this.sum)
      .then(returnCode => {
        console.log(returnCode);
        // Handle the payment intent as needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors
      });
  }



}
