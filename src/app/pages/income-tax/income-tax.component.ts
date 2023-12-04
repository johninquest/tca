import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-tax',
 /*  standalone: false,
 imports: [CommonModule], */
  templateUrl: './income-tax.component.html',
  styleUrl: './income-tax.component.scss'
})
export class IncomeTaxComponent { 
  constructor(private _router: Router) {}

  navigateToPage(routeName: string) { 
    return this._router.navigateByUrl(routeName)
  }

}
