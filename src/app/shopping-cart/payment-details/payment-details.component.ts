import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardDefinition, CreditCard, CreditCardValidators } from 'angular-cc-library';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private router: Router,) { }
  paymentForm = new FormGroup({
    cardNumber:new FormControl('',CreditCardValidators.validateCCNumber),
    expiryDate:new FormControl("",CreditCardValidators.validateExpDate),
    cvv:new FormControl("",[Validators.required,Validators.maxLength(3),Validators.minLength(3),Validators.pattern(/\d{3}/)])
  })
  isSubmitted = false;
  cardType="";
  ngOnInit(): void {
  }
  onCardNumberChange(){
     this.cardType = CreditCard.cardFromNumber(this.paymentForm.get('cardNumber')?.value||0)?.type;
     
  }
  onCheckout() {
    this.isSubmitted = true;
    console.log(this.paymentForm);
    
    if (this.paymentForm.valid) {
      let paymentDetails  = this.paymentForm.value;
      paymentDetails.cardType=this.cardType;
      
      this.router.navigate(['shopping-cart/confirmation']);
    }

  }

}
