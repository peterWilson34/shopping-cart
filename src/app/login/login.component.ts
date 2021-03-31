import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router,) {

  }

  ngOnInit(): void {
  }
  onUserLogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      this.router.navigate(['shopping-cart/order-details']);
    }

  }

}
