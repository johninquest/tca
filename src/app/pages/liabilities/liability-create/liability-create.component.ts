import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListDataModel } from 'src/app/utils/data.models';
import { LiabilityCategoryList } from 'src/app/shared/categories';
import { DatetimeService } from 'src/app/utils/datetime.service';

@Component({
  selector: 'app-liability-create',
  templateUrl: './liability-create.component.html',
  styleUrls: ['./liability-create.component.scss']
})
export class LiabilityCreateComponent implements OnInit {
  constructor(private _dts: DatetimeService) { }

  ngOnInit(): void {
    this.liabilityForm.patchValue({
      dateOfValue: this._dts.currentDate,
    })
  }

  entryType: string = 'liability';

  liabilityForm = new FormGroup({
    liabilityType: new FormControl<string>('', Validators.required),
    liabilityName: new FormControl<string>(''),
    monetaryValue: new FormControl<string>('', Validators.required),
    dateOfValue: new FormControl<string>('', Validators.required),
  });

  liabilityTypeList: ListDataModel[] = LiabilityCategoryList;

  onClickCancel() {
    history.back()
  }

  onClickSave() {
    alert('Tapped save button!')
  }

}
