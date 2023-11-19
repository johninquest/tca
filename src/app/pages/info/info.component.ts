import { Component } from '@angular/core';
import { ListOfTaxes } from 'src/app/shared/data.list';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent { 
  constructor() {}

  typesOfTaxes: any = ListOfTaxes.sort() ?? [];


}
