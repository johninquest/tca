import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyList } from 'src/app/shared/currencies';
import { COUNTRIES } from 'src/app/shared/countries';
import { ListDataModel } from 'src/app/utils/data.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    this.userForm.disable()
    this.userForm.patchValue({
      currency: 'eur',
      country: 'germany'
    })
  }

  userId: any;

  userForm = new FormGroup({
    userId: new FormControl<string>('', Validators.required),
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    dateOfBirth: new FormControl<string>(''),
    country: new FormControl<string>(''),
    currency: new FormControl(''),
  });

  currencyList: ListDataModel[] = CurrencyList;
  countryList: ListDataModel[] = COUNTRIES;

  onClickCancel() {
    history.back()
  }

  onClickSave() {
    alert('Tapped save button!')
  }

  onClickEdit() {
    this.userForm.enable()
  }

  comingSoon() {
    alert('Under construction!')
  }

}
