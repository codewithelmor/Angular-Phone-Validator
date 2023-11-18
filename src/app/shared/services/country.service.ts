import { Injectable } from '@angular/core';
import { getCountryDataList } from 'countries-list';
import { filter, map } from 'lodash';
import { SelectListItem } from '../models/select-list-item';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getAsianCountriesAsSelectListItems() {
    let countries = JSON.parse(JSON.stringify(getCountryDataList()));
    // console.log('countries', countries);
    let asianCountries = filter(countries, c => c['continent'] === 'AS');
    // console.log('asianCountries', asianCountries);
    let selectListItems: SelectListItem[] = map(asianCountries, (c) => { return { text: c['name'], value: c['iso2'] } });
    // console.log('selectListItems', selectListItems);
    return selectListItems;
  }

}
