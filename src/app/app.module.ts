import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderDetailsComponent } from './shopping-cart/order-details/order-details.component';
import { UserDetailsComponent } from './shopping-cart/user-details/user-details.component';
import { PaymentDetailsComponent } from './shopping-cart/payment-details/payment-details.component';
import { LoginComponent } from './login/login.component';

import { CreditCardDirectivesModule } from 'angular-cc-library';
import { ConfirmationComponent } from './shopping-cart/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    OrderDetailsComponent,
    UserDetailsComponent,
    PaymentDetailsComponent,
    LoginComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CreditCardDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
