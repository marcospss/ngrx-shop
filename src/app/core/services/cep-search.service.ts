import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Address } from './../models/address.model';
@Injectable()
export class CepSearchService {

  constructor(private http: HttpClient) { }

  search(zipcode: string): Observable<Address> {
    return this.http.get<Address>(`//viacep.com.br/ws/${zipcode}/json`);
  }

}
