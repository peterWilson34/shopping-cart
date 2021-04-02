import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/shared/order.service';
import { Product } from 'src/app/shared/product';
import { ServerService } from 'src/app/shared/server.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private serverService:ServerService,private router:Router,private orderSerive:OrderService) { }
  products:Product[]=[];
  loading:Boolean=true;
  total:number=0;
  ngOnInit(): void {
    this.serverService.getProducts().subscribe((data)=>{
      this.products = data;
      this.products.forEach(element => {
        this.total+=element.price;
      });
      this.loading= false;

    })
  }
  onCheckout(){
    this.orderSerive.orderRequest.orderDetails = this.products;
    this.orderSerive.orderRequest.total = this.total;
    this.router.navigate(['cart/user-details']);
  }

}
