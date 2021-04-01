import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  
  private productsUrl = 'https://fakestoreapi.com/products?limit=4';
  getProducts() {
    return this.http.get<Product[]>(this.productsUrl);
  }
  private postOrderUrl= "https://orderdetails.free.beeceptor.com";
  postOrder(data:any){
    return this.http.post(this.postOrderUrl,data);
    
  }
}
