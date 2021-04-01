import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  activeStep=0;
  constructor(private router:Router) {
    router.events.subscribe((_)=>{

      switch (router.url){
        case "/shopping-cart/order-details":
          this.activeStep = 1;
          break;
        case "/shopping-cart/user-details":
          this.activeStep = 2;
          break;
        case "/shopping-cart/payment-details":
          this.activeStep = 3;
          break;
        case "/shopping-cart/confirmation":
          this.activeStep = 4;
          break;
      }
    })

   }
  ngOnInit(): void {

  }

}
