import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListDataDescriptor } from 'src/app/utils/data-xture';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  constructor() {}

  createForm = new FormGroup({
    createType: new FormControl<string | null>('', Validators.required),
    isUrgent: new FormControl<string | null>(''),
  });

  createTypeList: ListDataDescriptor[] = [
    { value: '', viewValue: '' },
    { value: 'asset', viewValue: 'Asset' },
    { value: 'liability', viewValue: 'Liability' },
  ];
}
