import { Component } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListDataModel } from 'src/app/utils/data.models';
import { MainCategoryList, AssetCategoryList, LiabilityCategoryList } from 'src/app/shared/categories';


@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.scss']
})
export class AssetCreateComponent {
  constructor() { }

  assetCreateForm = new FormGroup({
    accountName: new FormControl<string>('', Validators.required), 
    categoryName: new FormControl<string>('', Validators.required),
    isUrgent: new FormControl<string | null>(''),
  });

  createTypeList: ListDataModel[] = MainCategoryList;
  assetCategoryList: ListDataModel[] = AssetCategoryList; 
  liabilityTypeList: ListDataModel[] = LiabilityCategoryList;

/*   setCategoryList(mainCategory: any) {
    if(mainCategory === 'asset') {
      return this.assetTypeList;
    }if(mainCategory === 'liability') {
      return this.liabilityTypeList;
    }else {
      return [];
    }
  } */
  onClickCancel() {
    history.back()
  }

  onClickSave() {
    alert('Tapped save button!')
  }

}
