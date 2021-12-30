import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CountryDataService {

  constructor(private http: HttpClient) {}

  getData(countryName:string,cityName:string="") {
    let URL = `http://universities.hipolabs.com/search?country=${countryName.toLocaleLowerCase()}`;
    if(cityName !== ""){
      URL = `http://universities.hipolabs.com/search?country=${countryName.toLocaleLowerCase()}&name=${cityName.toLocaleLowerCase()}`;
    }
    return this.http.get(URL);
  }
}
