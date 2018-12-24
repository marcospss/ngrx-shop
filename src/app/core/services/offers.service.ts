import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Offer } from './../models/offer.model';
import { Sections } from './../models/sections.model';

@Injectable()
export class OffersService {
  constructor(private http: HttpClient) {}

  getFeaturedOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(
      `${
        environment.urlEndPoint
      }/products?featured=true&_limit=9&_sort=order_display`
    );
  }

  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${environment.urlEndPoint}/products`);
  }

  getOffersByCategory(
    category: string,
    start: number = 0,
    end: number = 6,
    sort: string = 'id',
    order: string = 'asc'
  ): Observable<Offer[]> {
    return this.http.get<Offer[]>(
      `${
        environment.urlEndPoint
      }/products?categorySlug=${category}&_start=${start}&_end=${end}&_sort=${sort}&_order=${order}`
    );
  }

  getOfferBySlug(slug: string): Observable<Offer> {
    return this.http.get<Offer>(
      `${environment.urlEndPoint}/products?slug=${slug}`
    );
  }

  searchOffers(term: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(
      `${environment.urlEndPoint}/products?description_like=${term}&_limit=12`
    );
  }

  getAllSections(): Observable<Sections[]> {
    return this.http.get<Sections[]>(`${environment.urlEndPoint}/sections`);
  }
}
