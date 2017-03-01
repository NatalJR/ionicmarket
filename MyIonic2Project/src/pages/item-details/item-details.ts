import { Component } from '@angular/core';

import { NavController,AlertController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  index: number;
  total: number;
  listas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController, public storage: Storage) {

    this.selectedItem = navParams.get('item');
    this.index = navParams.get('index');

    	this.storage.ready().then(() => {
			this.storage.get('itemList').then((itemList) => {
				this.listas = JSON.parse(itemList);
			});
		});
		if(this.listas==null){this.listas=[];};
  	}


  	DeleteList(){
			this.listas.splice(this.index, 1);
			this.storage.set('itemList', JSON.stringify(this.listas));
	}

	EditItem(item){

		let prompt = this.alertCtrl.create({
			title: 'Editar Produto',
			inputs: [
			{ type: 'string', placeholder: 'Produto',  value: item.title,     name: 'title'},
			{ type: 'number', placeholder: 'Quantidade',  value: item.quantidade,  name: 'quantidade'},
			{ type: 'number', placeholder: 'Valor',  value: item.valor,  name: 'valor'}],
			buttons: [
			{
				text: 'Cancelar'
			},
			{
				text: 'Salvar',
				handler: data => {
					let index = this.selectedItem.indexOf(item);

					if(index > -1){
						this.selectedItem[index] = data;
					}
				}
			}
			]
		});

		prompt.present();       
	}
		
		DeleteItem(item){
			let ind = this.selectedItem.indexOf(item);

			if(ind > -1){
				this.selectedItem.splice(ind, 1);
			}

		}

		SaveLista(item){
			if(this.listas==null){this.listas=[];};
			console.log(this.listas);
			this.listas.splice(this.index,1,item);
			console.log(this.listas);
			this.storage.set('itemList', JSON.stringify(this.listas));
			//this.showToast("Lista Salva");
			

		}

}
