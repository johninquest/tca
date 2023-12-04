import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { DatetimeService } from 'src/app/utils/datetime.service';

@Component({
  selector: 'app-networth',
  templateUrl: './networth.component.html',
  styleUrls: ['./networth.component.scss']
})
export class NetworthComponent {
  constructor(private _dts: DatetimeService, private _router: Router) {
    /* this.fetchAllNetWorthData(); */
  }

  netWorthData: any;

/*   fetchAllNetWorthData() {
    let _req = this._db.getAllRowsInTable('networth');
    _req.then(val => {
      console.log('Net worth data:', val);
      this.netWorthData = val.data;
    }).catch(err => console.log('Error data:', err))

  } */

  dateFormatted(dateStr: string) {
    return this._dts.toDeDateFormat(dateStr);
  } 

  navigateToPage(routeName: string) { 
    return this._router.navigateByUrl(routeName)
  }

}
