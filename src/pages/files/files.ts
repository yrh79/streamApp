import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the FilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-files',
  templateUrl: 'files.html',
})
export class FilesPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private platform: Platform) {
    platform.ready().then((readySource) => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilesPage');
  }

  ionViewDidEnter() {
    this.hideTabsConditional(this.platform.width() > 768)
  }
  
  //hide tabs when it is 'hide' is true
  hideTabsConditional(hide: boolean) {
    let tabs = document.querySelectorAll('.tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        if (hide) {
          tabs[key].style.transform = 'translateY(0px)';
          return;
        }
        tabs[key].style.transform = 'translateY(56px)';
      });
    }
  }
}
