import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  activeStep = 0;
  constructor(private router: Router) {
    router.events.subscribe((_) => {
      // get the active step to highlight it in the UI
      if (router.url == "/cart/order-details") {
        this.activeStep = 1;
      } else if (router.url == "/cart/user-details") {
        this.activeStep = 2;

      } else if (router.url == "/cart/payment-details") {

        this.activeStep = 3;
      } else if (router.url.indexOf("/cart/confirmation/") > -1) {
        this.activeStep = 4;

      }
    })

  }
  ngOnInit(): void {

  }

}
