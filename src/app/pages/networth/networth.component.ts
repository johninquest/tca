import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/utils/supabase.service';
import { DatetimeService } from 'src/app/utils/datetime.service';

@Component({
  selector: 'app-networth',
  templateUrl: './networth.component.html',
  styleUrls: ['./networth.component.scss']
})
export class NetworthComponent {
  constructor(private _db: SupabaseService, private _dts: DatetimeService) {
    this.fetchAllNetWorthData();
  }

  netWorthData: any;

  fetchAllNetWorthData() {
    let _req = this._db.getAllRowsInTable('networth');
    _req.then(val => {
      console.log('Net worth data:', val);
      this.netWorthData = val.data;
    }).catch(err => console.log('Error data:', err))

  }

  dateFormatted(dateStr: string) {
    return this._dts.toDeDateFormat(dateStr);
  }

}
