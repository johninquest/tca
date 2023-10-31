import { Injectable } from '@angular/core';
import dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

  currentDate: string = dayjs().format('YYYY-MM-DD');
}
