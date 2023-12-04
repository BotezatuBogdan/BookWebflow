import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryAPIService } from 'src/app/services/country-api.service';
import { startWith, map } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShipmentPriceService } from 'src/app/services/shipment-price.service';

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

  selectedDeliveryPrice: string = this.deliveryPrices['Standard Delivery'];

  constructor(private countryService: CountryAPIService, private deliveryService: ShipmentPriceService, private fb: FormBuilder) {
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
      country: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.addressForm.valid && this.selectedDeliveryMethod !== '') {
      this.next.emit();
    }
  }

  previousStep(): void {
    this.previous.emit();
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.filteredCountries$ = this.inputControl.valueChanges.pipe(
        startWith(''), // Trigger filtering on component initialization
        map(value => this.filterCountries(value, countries))
      );
    });

    this.updateSelectedDeliveryPrice();
  }

  private filterCountries(value: string, countries: any[]): any[] {
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
}
