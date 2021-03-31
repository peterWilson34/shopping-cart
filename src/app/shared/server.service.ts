import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  
  productsUrl = 'https://fakestoreapi.com/products?limit=5';
  getProducts() {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
