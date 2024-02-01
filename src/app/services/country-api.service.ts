import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryAPIService {

  private apiUrl = 'https://restcountries.com/v3.1/region/europe';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((countries: any[]) => countries.map(country => ({ name: country.name.common }))),
      map(countries => countries.sort((a, b) => a.name.localeCompare(b.name)))
    );
  }
  
}
