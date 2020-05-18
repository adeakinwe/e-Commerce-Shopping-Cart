import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product';

import { productUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[] = []

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productUrl);
  }
}
