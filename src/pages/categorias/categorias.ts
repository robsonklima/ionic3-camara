import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { SessaoService } from '../../services/sessao';

@Component({
  templateUrl: 'categorias.html'
})
export class CategoriasPage {
  categorias: any[] = []

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
      this.getCategorias().then(() => {
        loader.dismiss();
      }, e => {
        loader.dismiss();
      });
    }, 1000);
  }

  getCategorias(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.sessaoService.getCategorias().subscribe((c) => { 
        this.categorias = c;

        resolve(c);
      }, e => {
        reject();
      })
    });
  }

  filterCategorias(ev: any) {
    this.getCategorias().then(() => {
      const val = ev.target.value;

      if (val && val.trim() != '') {
        this.categorias = this.categorias.filter((c) => {
          return (c.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    });
  }
}