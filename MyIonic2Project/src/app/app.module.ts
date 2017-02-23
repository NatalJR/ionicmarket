import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TelaInicialPage } from '../pages/tela-inicial/tela-inicial';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { AddlistPage } from '../pages/addlist/addlist';

@NgModule({
  declarations: [
    MyApp,
    TelaInicialPage,
    ItemDetailsPage,
    ListPage,
    AddlistPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TelaInicialPage,
    ItemDetailsPage,
    ListPage,
    AddlistPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
