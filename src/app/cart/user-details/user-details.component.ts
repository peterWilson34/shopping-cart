import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private router: Router,private orderService:OrderService) { }
  userDetailsForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(5)]),
    address: new FormControl('', [Validators.required,Validators.minLength(10)]),
    phone: new FormControl('', [Validators.required,Validators.pattern(/^0\d{9,10}$/)]),
    email: new FormControl('', [Validators.required,Validators.email]),
  });
  isSubmitted = false;
  ngOnInit(): void {
    if(this.orderService.orderRequest.userDetails){
      this.userDetailsForm.patchValue(this.orderService.orderRequest.userDetails);
    }
  }
  onUserLogin() {
    this.isSubmitted = true;
    if (this.userDetailsForm.valid) {
      this.orderService.orderRequest.userDetails = this.userDetailsForm.value;
      this.router.navigate(['cart/payment-details']);
    }

  }
}
