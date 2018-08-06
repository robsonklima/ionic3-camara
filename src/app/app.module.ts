import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { VereadoresPage } from '../pages/vereadores/vereadores';
import { VereadorPage } from '../pages/vereadores/vereador';
import { VereadorService } from '../services/vereador';
import { AssiduidadeService } from '../services/assiduidade';

@NgModule({
  declarations: [
    MyApp,
    VereadoresPage,
    VereadorPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VereadoresPage,
    VereadorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VereadorService,
    AssiduidadeService
  ]
})
export class AppModule {}
