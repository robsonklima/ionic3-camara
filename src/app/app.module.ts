import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { VereadoresPage } from '../pages/vereadores/vereadores';
import { VereadorPage } from '../pages/vereadores/vereador';
import { HomePage } from '../pages/home/home';
import { SessoesPage } from '../pages/sessoes/sessoes';
import { SessaoService } from '../services/sessao';
import { SessaoPage } from '../pages/sessoes/sessao';
import { ComparecimentosPage } from '../pages/comparecimentos/comparecimentos';
import { CategoriasPage } from '../pages/categorias/categorias';

@NgModule({
  declarations: [
    MyApp,
    VereadoresPage,
    VereadorPage,
    HomePage,
    SessoesPage,
    SessaoPage,
    ComparecimentosPage,
    CategoriasPage
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
    VereadorPage,
    HomePage,
    SessoesPage,
    SessaoPage,
    ComparecimentosPage,
    CategoriasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SessaoService
  ]
})
export class AppModule {}
