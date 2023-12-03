import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryAPIService } from 'src/app/services/country-api.service';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ShipmentPriceService } from 'src/app/services/shipment-price.service';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent {

  countries: any[] = [];
  selectedCountry: string | undefined;

  inputControl = new FormControl();
  filteredCountries!: Observable<any[]>;

  deliveryMethods: string[] = ['Standard Delivery', 'Express Delivery', 'Mail Delivery'];
  selectedDeliveryMethod: string = 'Standard Delivery';
  
  deliveryPrices: { [method: string]: string } = {
    'Standard Delivery': '$5.99',
    'Express Delivery': '$9.99',
    'Mail Delivery': 'Free'  // Making Mail free
  };

  selectedDeliveryPrice: string = this.deliveryPrices['Standard Delivery'];

  constructor(private countryService: CountryAPIService, private deliveryService: ShipmentPriceService) { }



  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.filteredCountries = this.inputControl.valueChanges.pipe(
        startWith(''), // Trigger filtering on component initialization
        map(value => this.filterCountries(value, countries))
      );
    });

    let delivery = {
      deliveryType: this.selectedDeliveryMethod,
      deliveryPrice: this.selectedDeliveryPrice
    }
    
    this.deliveryService.updateShipmentDetails(delivery);

  }

  private filterCountries(value: string, countries: any[]): any[] {
    const filterValue = value.toLowerCase();
    return countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }


  updateSelectedDeliveryPrice(): void {
    this.selectedDeliveryPrice = this.deliveryPrices[this.selectedDeliveryMethod];

    let delivery = {
      deliveryType: this.selectedDeliveryMethod,
      deliveryPrice: this.selectedDeliveryPrice
    }
    
    this.deliveryService.updateShipmentDetails(delivery);
  }

}
