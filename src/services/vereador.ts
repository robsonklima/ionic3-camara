import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Config } from './../config/config';
import { Observable } from "rxjs/Observable";
import { Vereador } from "../models/vereador";

@Injectable()
export class VereadorService {
  
  constructor(
    private http: Http
  ) {}

  getAll(): Observable<any[]> {
    return this.http.get(Config.API_URL + 'vereadores')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}