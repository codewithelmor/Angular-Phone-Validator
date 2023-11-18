import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectListItem } from './shared/models/select-list-item';
import { CountryService } from './shared/services/country.service';
import { PhoneValidator } from './shared/validators/phone.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'angular-phone-validator';

  countries: SelectListItem[] = [];

  form = new FormGroup({
    country: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(13)]),
  });

  constructor(
    private countryService: CountryService
  ) {
  }

  ngOnInit(): void {
    this.countries = this.countryService.getAsianCountriesAsSelectListItems();
  }

  onSelectCountry(event: any) {
    let selectedCountry = event.target.value;
    this.form.get('phone')?.setValidators([Validators.required, Validators.maxLength(13), PhoneValidator(selectedCountry)]);
  }

}
