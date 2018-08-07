import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Sessao } from '../../models/sessao';
import { SessaoService } from '../../services/sessao';
import { SessaoPage } from './sessao';

@Component({
  templateUrl: 'sessoes.html'
})
export class SessoesPage {
  sessoes: Sessao[] = []

  constructor(
    private navCtrl: NavController,
    private sessaoService: SessaoService,
  ) {}

  ionViewDidEnter() {
    this.getSessoes();
  }

  onLoadSessao(id: string) {
    this.navCtrl.push(SessaoPage, { id: id });
  }

  getSessoes(): Promise<Sessao[]> {
    return new Promise((resolve, reject) => {
      this.sessaoService.getSessoes().subscribe((sessoes) => { 
        this.sessoes = sessoes;
        
        resolve(sessoes);
      }, e => {
        reject();
      })
    });
  }

  filterSessoes(ev: any) {
    this.getSessoes().then(() => {
      const val = ev.target.value;

      if (val && val.trim() != '') {
        this.sessoes = this.sessoes.filter((sessao) => {
          return (sessao.proposicao.toLowerCase().indexOf(val.toLowerCase()) > -1
            || sessao.proposicao.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    });
  }
}