import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Config } from './../config/config';
import { Observable } from "rxjs/Observable";

@Injectable()
export class SessaoService {
  
  constructor(
    private http: Http
  ) {}

  getAll(): Observable<any[]> {
    return this.http.get(Config.API_URL + 'sessoes')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getById(id: string): Observable<any[]> {
    return this.http.get(Config.API_URL + 'sessoes/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}