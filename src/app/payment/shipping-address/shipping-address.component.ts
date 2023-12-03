import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryAPIService } from 'src/app/services/country-api.service';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

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

  constructor(private countryService: CountryAPIService) { }



  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.filteredCountries = this.inputControl.valueChanges.pipe(
        startWith(''), // Trigger filtering on component initialization
        map(value => this.filterCountries(value, countries))
      );
    });
  }

  private filterCountries(value: string, countries: any[]): any[] {
    const filterValue = value.toLowerCase();
    return countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

}
