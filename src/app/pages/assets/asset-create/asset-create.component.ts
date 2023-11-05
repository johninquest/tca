import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListDataModel } from 'src/app/utils/data.models';
import { AssetCategoryList } from 'src/app/shared/categories';
import { DatetimeService } from 'src/app/utils/datetime.service';


@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.scss']
})
export class AssetCreateComponent implements OnInit {
  constructor(private _dateTimeService: DatetimeService) { }

  ngOnInit(): void {
    this.assetForm.patchValue({
      dateOfValue: this._dateTimeService.currentDate,
    })

  }

  entryType: string = 'asset';

  assetForm = new FormGroup({
    assetType: new FormControl<string>('', Validators.required),
    assetName: new FormControl<string>('', Validators.required),
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
