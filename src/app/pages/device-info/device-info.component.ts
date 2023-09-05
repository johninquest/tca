import { Component, OnInit } from '@angular/core';
/* Check out platform.js */

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss'],
})
export class DeviceInfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.getUserAgent();
    this.getScreenInfo();
    this.getDeviceOrientation();
    this.getDeviceType();
  }
  deviceInfo: any;
  deviceUserAgent: any;
  deviceType: any;

  // Device info using plain JavaScript
  getUserAgent() {
    let userAgent = navigator.userAgent;
    console.log(`User Agent: ${userAgent}`);
    this.deviceUserAgent = userAgent;
  }

  getScreenInfo() {
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    let screenResolution = `${screenWidth}x${screenHeight}`;
    console.log(`Screen Resolution: ${screenResolution}`);
  }

  getDeviceOrientation() {
    const isPortrait = window.matchMedia('(orientation: portrait)').matches;
    console.log(`Is Portrait Mode: ${isPortrait}`);
  }

  isDeviceTouch() {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.maxTouchPoints > 0;
    console.log(`Is Touch Device: ${isTouchDevice}`);
  }

  getDeviceType() {
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    if (screenWidth < 768) {
      console.log('Device Type: Mobile');
      return (this.deviceType = 'Mobile');
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      console.log('Device Type: Tablet');
      return (this.deviceType = 'Tablet');
    } else {
      console.log('Device Type: Desktop');
      return (this.deviceType = 'Tablet');
    }
  }
}
