import { Component, OnInit } from '@angular/core';
import { DatetimeService } from 'src/app/utils/datetime.service';
import { SupabaseService } from 'src/app/utils/supabase.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent implements OnInit {
  constructor(private _db: SupabaseService, private _dateTimeService: DatetimeService) { }
  ngOnInit(): void {
    // this.assetRecords = 'No asset records found!';
    this.fetchAllAssets();
  }

  assetRecords: any;

  fetchAllAssets() {
    let _req = this._db.allRowsInTableWhere('networth', 'category', 'asset');
    _req.then(val => {
      console.log('Assets:', val);
      this.assetRecords = val.data;
    }).catch(err => console.log('Error:', err))

  }

  dateFormatted(dateStr: string) {
    return this._dateTimeService.toDeDateFormat(dateStr);
  }
}
