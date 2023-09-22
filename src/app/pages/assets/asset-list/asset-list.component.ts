import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent implements OnInit {
  ngOnInit(): void {
    this.assetListData = 'No data, at the moment!';
  }

  assetListData: any;
}
