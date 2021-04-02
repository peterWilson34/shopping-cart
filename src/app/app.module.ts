import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './cart/cart.component';
import { OrderDetailsComponent } from './cart/order-details/order-details.component';
import { UserDetailsComponent } from './cart/user-details/user-details.component';
import { PaymentDetailsComponent } from './cart/payment-details/payment-details.component';
import { LoginComponent } from './login/login.component';

import { CreditCardDirectivesModule } from 'angular-cc-library';
import { ConfirmationComponent } from './cart/confirmation/confirmation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    CreditCardDirectivesModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
