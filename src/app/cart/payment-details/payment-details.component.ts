import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardDefinition, CreditCard, CreditCardValidators } from 'angular-cc-library';
import { OrderService } from 'src/app/shared/order.service';
import { ServerService } from 'src/app/shared/server.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private router: Router, private orderSerive: OrderService, private serverService:ServerService) { }
  paymentForm = new FormGroup({
    cardNumber: new FormControl('', CreditCardValidators.validateCCNumber),
    expiryDate: new FormControl("", CreditCardValidators.validateExpDate),
    cvv: new FormControl("", [Validators.required, Validators.maxLength(3), Validators.minLength(3), Validators.pattern(/\d{3}/)])
  })
  isSubmitted = false;
  cardType = "";
  isLoading=false;
  serverError="";
  ngOnInit(): void {
  }
  onCardNumberChange() {
    this.cardType = CreditCard.cardFromNumber(this.paymentForm.get('cardNumber')?.value || 0)?.type;

  }
  onCheckout() {
    this.isSubmitted = true;
    if (this.paymentForm.valid) {
      let paymentDetails = this.paymentForm.value;
      paymentDetails.cardType = this.cardType;

      let requestBody = this.orderSerive.orderRequest;
      requestBody.paymentDetails = paymentDetails;
      this.isLoading=true;
      this.serverService.postOrder(requestBody).subscribe((res:any)=>{
        this.isLoading = false;
        this.router.navigate(['cart/confirmation',res['order_id']]);
        
      },(err:any)=>{
        this.isLoading = false;
        console.log(err);
        
        this.serverError = err.message;
      })
    }

  }

}
