import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Complaint',
      url: '/complaint',
      icon: 'color-filter'
    },
    {
      title: 'Locations',
      url: '/locations',
      icon: 'pin'
    },
    {
      title: 'Contact Management',
      url: '/contact-us',
      icon: 'contacts'
    },
    {
      title: 'Notice Period',
      url: '/notice-period',
      icon: 'book'
    },
    {
      title: 'Guest Stay',
      url: '/guest-stay',
      icon: 'man'
    },
    {
      title: 'Pay Rent',
      url: '/rent-payment',
      icon: 'cash'
    },
    {
      title: 'Room Change',
      url: '/room-change',
      icon: 'bed'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'people'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
