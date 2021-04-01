import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  isSubmitted = false;

  constructor(private router: Router,private orderSerive:OrderService) {

  }

  ngOnInit(): void {
  }
  onUserLogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      this.orderSerive.orderRequest.username=this.loginForm.value.username;
      this.router.navigate(['shopping-cart/order-details']);
    }

  }

}
