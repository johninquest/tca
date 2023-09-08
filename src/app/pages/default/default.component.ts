import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.updateDateTime();
  }

  currentDateTime!: Date;

  updateDateTime() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
    /* Update every 1 second (1000 milliseconds) */
  }

}
