import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/product';
import { ServerService } from 'src/app/shared/server.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private serverService:ServerService,private router:Router) { }
  products:Product[]=[];
  loading:Boolean=true;
  ngOnInit(): void {
    this.serverService.getProducts().subscribe((data)=>{
      this.products = data;
      this.loading= false;
    })
  }
  onCheckout(){
    this.router.navigate(['../user-details']);
  }

}
