import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListDataModel } from 'src/app/utils/data.models';
import { MainCategoryList } from 'src/app/shared/categories';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  constructor() { }

  createForm = new FormGroup({
    createType: new FormControl<string | null>('', Validators.required),
    isUrgent: new FormControl<string | null>(''),
  });

  createTypeList: ListDataModel[] = MainCategoryList;
}