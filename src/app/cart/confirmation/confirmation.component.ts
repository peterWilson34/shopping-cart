import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/shared/order.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  orderId;
  constructor(
    private modalService:NgbModal,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private orderService:OrderService) { 
    this.orderId = this.activatedRoute.snapshot.paramMap.get("id");
  }
  @ViewChild('content') content:any;
  products?:Product[]=[];
  total?:number;
  ngOnInit(): void {
    this.products = this.orderService.orderRequest.orderDetails;
    this.total = this.orderService.orderRequest.total;
    setTimeout(()=>{
      this.modalService.open(this.content)
    },5000)

  }
  onCloseModal(){
    this.modalService.dismissAll();
    this.router.navigateByUrl('/cart/order-details');

  }

}
