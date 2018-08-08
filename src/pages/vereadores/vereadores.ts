import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { Vereador } from '../../models/vereador';
import { VereadorPage } from './vereador';
import { SessaoService } from '../../services/sessao';

@Component({
  templateUrl: 'vereadores.html'
})
export class VereadoresPage {
  vereadores: Vereador[] = []

  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private sessaoService: SessaoService
  ) {}

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    loader.present();

    setTimeout(() => {
      this.getVereadores().then(() => {
        loader.dismiss();
      }, e => {
        loader.dismiss();
      });
    }, 600);
  }

  onLoadVereador(vereador: Vereador) {
    this.navCtrl.push(VereadorPage, { vereador: vereador });
  }

  getVereadores(): Promise<Vereador[]> {
    return new Promise((resolve, reject) => {
      this.sessaoService.getVereadores().subscribe((vereadores) => { 
        this.vereadores = vereadores;

        resolve(vereadores);
      }, e => {
        reject();
      })
    });
  }

  filterVereadores(ev: any) {
    this.getVereadores().then(() => {
      const val = ev.target.value;

      if (val && val.trim() != '') {
        this.vereadores = this.vereadores.filter((vereador) => {
          return (vereador.vereador.toLowerCase().indexOf(val.toLowerCase()) > -1
            || vereador.partido.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    });
  }
}