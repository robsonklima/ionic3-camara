import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Vereador } from '../../models/vereador';
import { AssiduidadeService } from '../../services/assiduidade';

@Component({
  templateUrl: 'vereador.html'
})
export class VereadorPage {
  segment: string = "identidade";
  vereador: Vereador;
  assiduidades: any;
  indiceAssiduidade: number;

  constructor(
    private navParams: NavParams,
    private assiduidadeService: AssiduidadeService
  ) {
    this.vereador = this.navParams.get('vereador');
  }

  ionViewDidLoad() {
    this.assiduidadeService.byNomeVereador(this.vereador.vereador).subscribe((res) => {
      this.assiduidades = res;
    }, error => {});
  }
}
