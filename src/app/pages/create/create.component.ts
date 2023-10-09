import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListDataModel } from 'src/app/utils/data.models';
import { MainCategoryList, AssetCategoryList, LiabilityCategoryList } from 'src/app/shared/categories';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  constructor() { }

  createForm = new FormGroup({
    accountName: new FormControl<string>('', Validators.required), 
    categoryName: new FormControl<string>('', Validators.required),
    isUrgent: new FormControl<string | null>(''),
  });

  createTypeList: ListDataModel[] = MainCategoryList;
  assetTypeList: ListDataModel[] = AssetCategoryList; 
  liabilityTypeList: ListDataModel[] = LiabilityCategoryList;

  setCategoryList(mainCategory: any) {
    if(mainCategory === 'asset') {
      return this.assetTypeList;
    }if(mainCategory === 'liability') {
      return this.liabilityTypeList;
    }else {
      return [];
    }
  }
}