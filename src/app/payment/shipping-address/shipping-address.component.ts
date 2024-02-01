import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryAPIService } from 'src/app/services/country-api.service';
import { startWith, map, switchMap } from 'rxjs/operators';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ShipmentPriceService } from 'src/app/services/shipment-price.service';
import { Stripe } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CartDbService } from 'src/app/services/cart-db.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent {

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  addressForm: FormGroup;

  countries: any[] = [];
  selectedCountry: string | undefined;

  inputControl = new FormControl();
  filteredCountries$: Observable<any[]> = new Observable<any[]>();

  deliveryMethods: string[] = ['Standard Delivery', 'Express Delivery', 'Mail Delivery'];
  selectedDeliveryMethod: string = '';

  deliveryPrices: { [method: string]: string } = {
    'Standard Delivery': '$5.99',
    'Express Delivery': '$9.99',
    'Mail Delivery': 'Free'  // Making Mail free
  };

  private stripePromise = loadStripe('pk_test_51OLMMhIDXc9qzD2OeLmgFCQ9UMoirR6NcFUD4EZvOHUXttvVZBATE93XmQLfU7pw9rUSZ2yNKKMyot8etnCtrCWe00D6q74OW0');


  selectedDeliveryPrice: string = this.deliveryPrices['Standard Delivery'];

  constructor(private fb: FormBuilder, private countryService: CountryAPIService, private cartItems: CartDbService, private deliveryService: ShipmentPriceService) {
    this.addressForm = this.fb.group({
      // Contact Details
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],

      // Shipping Address
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.filteredCountries$ = this.inputControl.valueChanges.pipe(
        startWith(this.addressForm.get('country')?.value || ''),
        map(value => this.filterCountries(value, countries))
      );
    });

    this.updateSelectedDeliveryPrice();
  }

  async createPaymentIntent(amount: number): Promise<string> {
    const stripe = await this.stripePromise;
    amount = parseFloat((amount * 100).toFixed(2));
    //amount = amount * 100;
    const response = await fetch('http://localhost:8085/stripe/create-payment-link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency: 'usd'
      }),
    });

    const clientSecret = await response.json();
    return clientSecret.paymentLink;
  }

  previousStep(): void {
    this.previous.emit();
  }

  filter(inputValue: string): void {
    this.filteredCountries$ = this.countryService.getCountries().pipe(
      map(countries => this.filterCountries(inputValue, countries))
    );
  }

  filterCountries(value: string, countries: any[]): any[] {
    const filterValue = value.toLowerCase();
    return countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  updateSelectedDeliveryPrice(): void {
    this.selectedDeliveryPrice = this.deliveryPrices[this.selectedDeliveryMethod];

    const delivery = {
      deliveryType: this.selectedDeliveryMethod,
      deliveryPrice: this.selectedDeliveryPrice
    };

    this.deliveryService.updateShipmentDetails(delivery);
  }

  submitForm(): void {
    if (this.addressForm.valid && this.selectedDeliveryMethod !== '') {
      if (this.addressForm.valid && this.selectedDeliveryMethod !== '') {
        this.createPaymentIntent(this.cartItems.getTotal()).then((url) => {
          window.open(url, '_blank');
        });
      }
    }
  }

}
