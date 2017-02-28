import { Component } from '@angular/core';

import {AddlistPage} from '../addlist/addlist';
import {ListPage} from '../list/list';
import {MapPage} from '../map/map'


@Component({
	selector: 'page-tela-inicial',
	templateUrl: 'tela-inicial.html'
})

export class TelaInicialPage {
	MapPage = MapPage;
	ListPage = ListPage;
	AddlistPage = AddlistPage;
	constructor() {

	}
}
