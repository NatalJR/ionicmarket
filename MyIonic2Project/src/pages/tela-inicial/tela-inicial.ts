import { Component } from '@angular/core';

import {AddlistPage} from '../addlist/addlist';
import {ListPage} from '../list/list';


@Component({
  selector: 'page-tela-inicial',
  templateUrl: 'tela-inicial.html'
})
export class TelaInicialPage {
  ListPage = ListPage;
  AddlistPage = AddlistPage;
  constructor() {

  }
}
