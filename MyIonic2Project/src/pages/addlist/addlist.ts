import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Toast } from 'ionic-native';

@Component({
	selector: 'page-addlist',
	templateUrl: 'addlist.html'
})
export class AddlistPage {

	public items:any;

	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage,  private platform: Platform) {

		this.storage.ready().then(() => {
			this.storage.get('itemList').then((itemList) => {
				this.items = JSON.parse(itemList);
			});
		});
		if(this.items==null){this.items=[];};
	}	 

	ionViewDidLoad(){

	}

	ionViewDidEnter(){
		this.storage.ready().then(() => {
			this.storage.get('itemList').then((itemList) => {
				this.items = JSON.parse(itemList);
			});
		});
		if(this.items==null){this.items=[];};
	}

	AddItem(){
		if(this.items==null){this.items=[];};
		let prompt = this.alertCtrl.create({
			title: 'Adicionar Item',
			inputs: [
			{ type: 'string',   placeholder: 'Produto',     name: 'title'},
			{ type: 'number',   placeholder: 'Quantidade',  name: 'quantidade'}
			],
			buttons: [
			{
				text: 'Cancelar'
			},
			{
				text: 'Adicionar',
				handler: data => {
					if(data) {
						this.items.push(data);
					}
				}
			}
			]
		});

		prompt.present();
	}

	EditItem(item){

		let prompt = this.alertCtrl.create({
			title: 'Editar Produto',
			inputs: [
			{ type: 'string',   placeholder: 'Produto',     name: 'title'},
			{ type: 'number',   placeholder: 'Quantidade',  name: 'quantidade'}],
			buttons: [
			{
				text: 'Cancelar'
			},
			{
				text: 'Salvar',
				handler: data => {
					let index = this.items.indexOf(item);

					if(index > -1){
						this.items[index] = data;
					}
				}
			}
			]
		});

		prompt.present();       

	}

		SaveLista(lista){
			this.storage.set('itemList', JSON.stringify(lista));
			this.navCtrl.pop();
			this.showToast("Lista Salva");
		}

		DeleteItem(item){
			let index = this.items.indexOf(item);

			if(index > -1){
				this.items.splice(index, 1);
			}
		}

		showToast(message) {
			this.platform.ready().then(() =>
				Toast.show(message, 'short', 'bottom').subscribe(
					toast => {
						console.log(toast);
					}
					));
		}
	}