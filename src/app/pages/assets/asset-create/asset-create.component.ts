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
    assetType: new FormControl<string>('', Validators.required),
    assetName: new FormControl<string>('', Validators.required),
    monetaryValue: new FormControl<string>('', Validators.required),
    isUrgent: new FormControl<string | null>(''),
  });

  assetCategoryList: ListDataModel[] = AssetCategoryList;

  onClickCancel() {
    history.back()
  }

  onClickSave() {
    alert('Tapped save button!')
  }

}
