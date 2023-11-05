import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/utils/supabase.service';

@Component({
  selector: 'app-networth',
  templateUrl: './networth.component.html',
  styleUrls: ['./networth.component.scss']
})
export class NetworthComponent {
  constructor(private _db: SupabaseService) {
    this.fetchAllNetWorthData();
  }

  netWorthData: any;

  fetchAllNetWorthData() {
    let _req = this._db.getAllRowsInTable('networth');
    _req.then(val => console.log('Net worth data:', val)).catch(err => console.log('Error data:', err))

  }

}
