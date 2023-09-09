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
    /* this.isDeviceTouch(); */
  }

  deviceUserAgent: any;
  deviceType: any;
  deviceOrientation: any;
  deviceScreenResolution: any;

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
    this.deviceScreenResolution = screenResolution;
  }

  getDeviceOrientation() {
    let isPortrait = window.matchMedia('(orientation: portrait)').matches;
    if (isPortrait === true) {
      this.deviceOrientation = 'Portrait';
    } else {
      this.deviceOrientation = 'Landscape';
    }
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
    // let screenHeight = window.screen.height;

    if (screenWidth < 768) {
      console.log('Device Type: Mobile');
      this.deviceType = 'Mobile';
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      console.log('Device Type: Tablet');
      this.deviceType = 'Tablet';
    } else {
      console.log('Device Type: Desktop');
      this.deviceType = 'Desktop';
    }
  }
}
