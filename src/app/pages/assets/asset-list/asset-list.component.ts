import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/utils/supabase.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent implements OnInit {
  constructor(private _db: SupabaseService) { }
  ngOnInit(): void {
    this.assetRecords = 'No asset records found!';
    this.fetchAllAssets();
  }

  assetRecords: any;

  fetchAllAssets() {
    let _req = this._db.getAllRowsInTable('networth');
    _req.then(val => console.log('Assets:', val)).catch(err => console.log('Error:', err))

  }
}
