import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListDataModel } from 'src/app/utils/data.models';
import { MainCategoryList, LiabilityCategoryList } from 'src/app/shared/categories';

@Component({
  selector: 'app-liability-create',
  templateUrl: './liability-create.component.html',
  styleUrls: ['./liability-create.component.scss']
})
export class LiabilityCreateComponent {
  constructor() { }

  entryType: string = 'liability';

  liabilityCreateForm = new FormGroup({
    liabilityType: new FormControl<string>('', Validators.required),
    liabilityName: new FormControl<string>('', Validators.required),
    monetaryValue: new FormControl(''),
  });

  createTypeList: ListDataModel[] = MainCategoryList;
  liabilityTypeList: ListDataModel[] = LiabilityCategoryList;

  onClickCancel() {
    history.back()
  }

  onClickSave() {
    alert('Tapped save button!')
  }

}
