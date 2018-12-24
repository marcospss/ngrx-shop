import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StateCountry } from './../models/state-country.model';

@Injectable()
export class StatesService {

  constructor(private http: HttpClient) { }

  getStatesBr(): Observable<StateCountry[]> {
    return this.http.get<StateCountry[]>(`assets/data/states-br.json`);
  }

}
