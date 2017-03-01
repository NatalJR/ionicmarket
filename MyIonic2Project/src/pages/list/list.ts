import { Component } from '@angular/core';

import { NavController, NavParams} from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  
  selectedItem: any;
  public listas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    this.selectedItem = navParams.get('item');


    this.storage.ready().then(() => {
      this.storage.get('itemList').then((itemList) => {
        this.listas = JSON.parse(itemList);
      });
    });
    if(this.listas==null){this.listas=[];};
  }

  ionViewDidEnter(){
    this.storage.ready().then(() => {
      this.storage.get('itemList').then((itemList) => {
        this.listas = JSON.parse(itemList);
      });
    });
    if(this.listas==null){this.listas=[];};
  }


  itemTapped(event, item) {
    
    this.navCtrl.push(ItemDetailsPage, {
      item: item,
      index:this.listas.indexOf(item)
    });
  }
}
