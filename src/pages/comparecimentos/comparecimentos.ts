import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { SessaoService } from '../../services/sessao';

@Component({
  templateUrl: 'comparecimentos.html'
})
export class ComparecimentosPage {
  comparecimentos: any[] = []

  constructor(
    private loadingCtrl: LoadingController,
    private sessaoService: SessaoService,
  ) {}

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    loader.present();

    setTimeout(() => {
      this.getComparecimentos().then(() => {
        loader.dismiss();
      }, e => {
        loader.dismiss();
      });
    }, 600);
  }

  getComparecimentos(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.sessaoService.getComparecimentos().subscribe((c) => { 
        this.comparecimentos = c;

        resolve(c);
      }, e => {
        reject();
      })
    });
  }

  filterComparecimentos(ev: any) {
    this.getComparecimentos().then(() => {
      const val = ev.target.value;

      if (val && val.trim() != '') {
        this.comparecimentos = this.comparecimentos.filter((c) => {
          return (c.vereador.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    });
  }
}