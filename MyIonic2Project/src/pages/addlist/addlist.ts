import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Toast } from 'ionic-native';

@Component({
	selector: 'page-addlist',
	templateUrl: 'addlist.html'
})
export class AddlistPage {
	
	public listas:any;
	public items:any;

	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage,  private platform: Platform) {

		this.storage.ready().then(() => {
			this.storage.get('itemList').then((itemList) => {
				this.listas = JSON.parse(itemList);
			});
		});
		if(this.listas==null){this.listas=[];};
	}	 

	ionViewDidLoad(){

	}

	ionViewDidEnter(){
		this.storage.ready().then(() => {
			this.storage.get('itemList').then((itemList) => {
				this.listas = JSON.parse(itemList);
			});
		});
		if(this.listas==null){this.listas=[];};
	}

	AddItem(){
		if(this.items==null){this.items=[];};
		let prompt = this.alertCtrl.create({
			title: 'Adicionar Item',
			inputs: [
			{ type: 'string',   placeholder: 'Produto',     name: 'title'},
			{ type: 'number',   placeholder: 'Quantidade',  name: 'quantidade'},
			{type: 'number', placeholder: 'Valor', name:'valor'}
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

		SaveLista(items){
			if(this.listas==null){this.listas=[];};
			this.listas.push(items);
			this.storage.set('itemList', JSON.stringify(this.listas));
			this.navCtrl.pop();
			//this.showToast("Lista Salva");


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