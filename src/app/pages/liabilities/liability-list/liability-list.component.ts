import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/utils/supabase.service';

@Component({
  selector: 'app-liability-list',
  templateUrl: './liability-list.component.html',
  styleUrls: ['./liability-list.component.scss']
})
export class LiabilityListComponent implements OnInit {

  constructor(private _db: SupabaseService) { }

  ngOnInit(): void { }

  liabilityRecords: any

  fetchAllLiabilities() {
    let _req = this._db.getAllRowsInTable('networth');
    _req.then(val => console.log('Liabilities:', val)).catch(err => console.log('Error:', err))
  }

}
