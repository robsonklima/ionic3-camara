import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VereadoresPage } from '../vereadores/vereadores';
import { SessoesPage } from '../sessoes/sessoes';
import { ComparecimentosPage } from '../comparecimentos/comparecimentos';

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

  onLoadComparecimentos() {
    this.navCtrl.push(ComparecimentosPage);
  }
}
