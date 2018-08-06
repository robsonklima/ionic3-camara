import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VereadoresPage } from '../vereadores/vereadores';
import { SessoesPage } from '../sessoes/sessoes';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(
    private navCtrl: NavController
  ) {}

  onLoadSessoes() {
    this.navCtrl.push(SessoesPage);
  }

  onLoadVereadores() {
    this.navCtrl.push(VereadoresPage);
  }
}
