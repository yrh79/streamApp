import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tableComponent?: any;
  index?: number;
  icon: string;
}


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Devices', pageName: 'DevicesPage', tableComponent: 'DevicePage', index: 0, icon: 'videocam' },
    { title: 'Files', pageName: 'FilesPage', tableComponent: 'FilesPage', index: 1, icon: 'recording' },
    { title: 'Channels', pageName: 'ChannelsPage', tableComponent: 'ChannelsPage', index: 2, icon: 'closed-captioning' },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
    let params = {};
    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNavs() && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    }
    else {
      this.nav.setRoot(page.pageName, params)
    }

  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root == page.tableComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name == page.pageName) {
      return 'primary';
    }
    return;
  }

}
