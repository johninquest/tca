import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListDataModel } from 'src/app/utils/data.models';
import { AssetCategoryList } from 'src/app/shared/categories';


@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.scss']
})
export class AssetCreateComponent {
  constructor() { }

  entryType: string = 'asset';

  assetCreateForm = new FormGroup({
    type: new FormControl<string>('', Validators.required),
    name: new FormControl<string>('', Validators.required),
    monetaryValue: new FormControl<string>('', Validators.required), 
    dateOfValue: new FormControl<string>(''),
  });

  assetCategoryList: ListDataModel[] = AssetCategoryList;

  onClickCancel() {
    history.back()
  }

  onClickSave() {
    alert('Tapped save button!')
  }

}
