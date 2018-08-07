import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Vereador } from '../../models/vereador';
import { SessaoService } from '../../services/sessao';

@Component({
  templateUrl: 'vereador.html'
})
export class VereadorPage {
  segment: string = "identidade";
  vereador: Vereador;
  assiduidades: any;
  indiceAssiduidade: number;
  tendencias: any;

  constructor(
    private navParams: NavParams,
    private sessaoService: SessaoService
  ) {
    this.vereador = this.navParams.get('vereador');
  }

  ionViewDidLoad() {
    this.getComparecimentos().then(() => this.getTendencias()).catch(() => {});
  }

  private getComparecimentos(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sessaoService.getComparecimentos(this.vereador.vereador).subscribe((c) => {
        this.assiduidades = c;
        resolve(c);
      }, error => {
        reject(error);
      });
    });
  }

  private getTendencias(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sessaoService.getTendencias(this.vereador.vereador).subscribe((t) => {
        this.tendencias = t;
        resolve(t);
      }, error => {
        reject(error);
      });
    });
  }
}
