import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Sessao } from '../../models/sessao';
import { SessaoService } from '../../services/sessao';

@Component({
  templateUrl: 'sessao.html'
})
export class SessaoPage {
  segment: string = "info";
  id: string;
  sessao: any;

  constructor(
    private navParams: NavParams,
    private sessaoService: SessaoService
  ) {
    this.id = this.navParams.get('id');
  }

  ionViewDidEnter() {
    this.getSessao();
  }

  getSessao(): Promise<Sessao[]> {
    return new Promise((resolve, reject) => {
      this.sessaoService.getById(this.id).subscribe((sessao) => { 
        this.sessao = sessao;

        resolve(sessao);
      }, e => {
        reject();
      })
    });
  }
}
