import { Component, OnInit } from '@angular/core';
import { DatetimeService } from 'src/app/utils/datetime.service';
import { SupabaseService } from 'src/app/utils/supabase.service';

@Component({
  selector: 'app-liability-list',
  templateUrl: './liability-list.component.html',
  styleUrls: ['./liability-list.component.scss']
})
export class LiabilityListComponent implements OnInit {

  constructor(private _db: SupabaseService, private _dateTimeService: DatetimeService) {
    this.fetchLiabilities();
  }

  ngOnInit(): void { }

  liabilityRecords: any

  fetchLiabilities() {
    let _req = this._db.allRowsInTableWhere('networth', 'category', 'liability');
    _req.then(val => {
      console.log('Liabilities:', val);
      this.liabilityRecords = val.data;
    }).catch(err => console.log('Error:', err))
  }

  dateFormatted(dateStr: string) {
    return this._dateTimeService.toDeDateFormat(dateStr);
  }

}
