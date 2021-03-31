import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private router: Router) { }
  userDetailsForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(5)]),
    address: new FormControl('', [Validators.required,Validators.minLength(10)]),
    phone: new FormControl('', [Validators.required,Validators.pattern(/^0\d{8,9}$/)]),
    email: new FormControl('', [Validators.required,Validators.email]),
  });
  isSubmitted = false;
  ngOnInit(): void {
  }
  onUserLogin() {
    this.isSubmitted = true;
    if (this.userDetailsForm.valid) {
      console.log(this.userDetailsForm);
      this.router.navigate(['shopping-cart/payment-details']);
    }

  }
}
