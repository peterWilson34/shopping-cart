import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  orderId;
  constructor(private modalService:NgbModal,private activatedRoute:ActivatedRoute,private router:Router) { 
    this.orderId = this.activatedRoute.snapshot.paramMap.get("id");
  }
  @ViewChild('content') content:any;
  ngOnInit(): void {
    setTimeout(()=>{
      this.modalService.open(this.content)
    },5000)
  }
  onCloseModal(){
    this.modalService.dismissAll();
    this.router.navigateByUrl('/shopping-cart/order-details');

  }

}
