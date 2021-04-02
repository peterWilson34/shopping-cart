import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  orderRequest:{
    username?:String,
    orderDetails?:Product[],
    userDetails?:{name:string,address:string,phone:string,email:string},
    paymentDetails?:{cardNumber:Number,cardExpiry:String,cvv:Number,cardType:String},
    total?:number

  }={};
}
