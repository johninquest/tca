import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss'],
})
export class DeviceInfoComponent implements OnInit {
  constructor(private deviceDetectorService: DeviceDetectorService) {}

  ngOnInit() {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    /* console.log('Device info:', this.deviceInfo); */
  }
  deviceInfo: any;
}
