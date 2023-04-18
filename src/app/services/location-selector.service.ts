import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import * as countrycitystatejson from 'countrycitystatejson';

@Injectable({
  providedIn: 'root'
})
export class LocationSelectorService {
  private countryData = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

  getCountries(): Observable<any> {
    return this.http.get(this.countryData);
  }

  // getStatesByCountry(countryShotName: string) {
  //   return this.countryData.getStatesByShort(countryShotName);
  // }

  // getCitiesByState(country: string, state: string) {
  //   return this.countryData.getCities(country, state);
  // }
  constructor(private http:HttpClient) { }
}
